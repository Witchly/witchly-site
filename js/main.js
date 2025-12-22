document.addEventListener("DOMContentLoaded", function() {
    
    // --- LOAD NAVBAR ---
    fetch("/components/navbar.html")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            
            // Initialize functionality AFTER HTML is injected
            initializeMobileMenu(); 
            highlightActiveLink();
        })
        .catch(error => console.error("Error loading navbar:", error));

    // --- LOAD FOOTER ---
    fetch("/components/footer.html")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
            
            // Update Copyright Year
            const yearSpan = document.getElementById("copyright-year");
            if(yearSpan) {
                yearSpan.innerText = new Date().getFullYear();
            }

            // Initialize Cookie Banner AFTER footer is loaded
            initializeCookieBanner();
        })
        .catch(error => console.error("Error loading footer:", error));
});

// Function to make the mobile hamburger button work
function initializeMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Function to highlight active link (Cloudflare Pages compatible)
function highlightActiveLink() {
    let currentPath = window.location.pathname
        .replace(/^\//, '')      // Remove leading slash
        .replace(/\/$/, '')      // Remove trailing slash
        .replace(/\.html$/, ''); // Remove .html extension
    
    if (currentPath === "") currentPath = "index";

    const navLinks = document.querySelectorAll('#desktop-menu-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        let cleanHref = href
            .replace(/^\//, '')
            .replace(/\/$/, '')
            .replace(/\.html$/, '');

        if (cleanHref === "") cleanHref = "index";

        if (currentPath === cleanHref) {
            link.classList.remove('text-gray-300', 'hover:text-white');
            link.classList.add('text-white', 'text-witchly-primary', 'font-bold');
        }
    });
}

// --- NEW: Cookie Consent Logic ---
function initializeCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Only run if elements exist and user hasn't accepted yet
    if (banner && acceptBtn && !localStorage.getItem('witchly_cookie_consent')) {
        
        // Show banner after 1 second delay
        setTimeout(() => {
            // Remove the classes that hide it
            banner.classList.remove('translate-y-full', 'opacity-0');
        }, 1000);

        // Handle Click
        acceptBtn.addEventListener('click', () => {
            // Save consent
            localStorage.setItem('witchly_cookie_consent', 'true');
            // Hide banner
            banner.classList.add('translate-y-full', 'opacity-0');
        });
    }
}