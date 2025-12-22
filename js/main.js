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

// FIXED: Robust Highlighting for Cloudflare Pages
function highlightActiveLink() {
    // 1. Get current path and clean it (remove leading slash, trailing slash, and .html)
    // e.g. "/pricing.html" -> "pricing"
    // e.g. "/pricing"      -> "pricing"
    let currentPath = window.location.pathname
        .replace(/^\//, '')      // Remove leading slash
        .replace(/\/$/, '')      // Remove trailing slash
        .replace(/\.html$/, ''); // Remove .html extension
    
    // Handle Root (Home Page)
    if (currentPath === "") currentPath = "index";

    const navLinks = document.querySelectorAll('#desktop-menu-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // 2. Clean the link href exactly the same way
        let cleanHref = href
            .replace(/^\//, '')
            .replace(/\/$/, '')
            .replace(/\.html$/, '');

        if (cleanHref === "") cleanHref = "index";

        // 3. Compare the cleaned versions
        // This ensures "pricing" matches "pricing.html"
        if (currentPath === cleanHref) {
            link.classList.remove('text-gray-300', 'hover:text-white');
            link.classList.add('text-white', 'text-witchly-primary', 'font-bold');
        }
    });
}