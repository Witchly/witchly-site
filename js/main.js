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

// Global Function for Free Trial Logic
window.claimTrial = function(event, url) {
    if(event) event.preventDefault();
    const btn = event.currentTarget;
    if(!btn) return;
    
    const originalText = btn.innerHTML;
    
    navigator.clipboard.writeText('TESTDRIVE').then(() => {
        // Change Button State
        btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Code Copied!';
        // Remove old classes
        btn.classList.remove('bg-white', 'text-witchly-base', 'hover:bg-gray-200', 'bg-white/5', 'hover:bg-witchly-primary', 'hover:bg-orange-500', 'hover:bg-blue-500', 'hover:bg-cyan-500', 'border-gray-600', 'border-gray-700');
        // Add new success classes
        btn.classList.add('bg-green-500', 'border-green-500', 'text-white', 'hover:bg-green-600');
        
        // Show Toast
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl border border-gray-700 z-50 flex items-center gap-3 animate-fade-in-up';
        toast.innerHTML = '<i class="fa-solid fa-clipboard-check text-green-400"></i> <span>Coupon <strong>TESTDRIVE</strong> copied! Paste at checkout.</span>';
        document.body.appendChild(toast);

        // Redirect
        setTimeout(() => {
            window.location.href = url;
        }, 1500);
    }).catch(err => {
        window.location.href = url;
    });
};