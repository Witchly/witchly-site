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
            
            // Update Copyright Year automatically
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

// Function to highlight the current page in the Navbar
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#desktop-menu-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.remove('text-gray-300');
            link.classList.add('text-white', 'text-witchly-primary'); // Highlight color
        }
    });
}