// --- KNOWLEDGEBASE ACTIONS ---

// 1. Function to Expand/Collapse Cards
function toggleCard(id) {
    const card = document.getElementById(id);
    if (!card) return;
    
    const content = card.querySelector('.answer-content');
    const btn = card.querySelector('.read-more-btn');

    // Toggle the CSS class that limits text height
    if (content.classList.contains('line-clamp-4')) {
        // EXPAND
        content.classList.remove('line-clamp-4');
        btn.innerHTML = 'Show Less <i class="fa-solid fa-arrow-up ml-2 text-xs"></i>';
    } else {
        // COLLAPSE
        content.classList.add('line-clamp-4');
        btn.innerHTML = 'Read Answer <i class="fa-solid fa-arrow-right ml-2 text-xs"></i>';
        
        // Optional: Smooth scroll back to card if user is far down
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// 2. Function to Handle URL Anchors (e.g. minecraft.html#ram)
// This is required for the Search Bar to work correctly
function handleHashAnchor() {
    const hash = window.location.hash.substring(1); // Get text after #
    if (!hash) return;
    
    const element = document.getElementById(hash);
    if (element) {
        // Scroll to the card
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight the card temporarily
        element.classList.add('ring-2', 'ring-white', 'shadow-2xl');
        setTimeout(() => element.classList.remove('ring-2', 'ring-white', 'shadow-2xl'), 2000);

        // Auto-expand the card
        const content = element.querySelector('.answer-content');
        if (content && content.classList.contains('line-clamp-4')) {
            toggleCard(hash);
        }
    }
}