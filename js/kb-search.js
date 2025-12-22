document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('kb-search-input');
    const resultsContainer = document.getElementById('kb-search-results');

    // Wait 200ms to ensure faq_db.js is fully loaded by the browser
    setTimeout(() => {
        // Fallback if database is empty or missing
        if (typeof window.faqDatabase === 'undefined') {
            console.error("KB Search: Database not loaded.");
            return;
        }

        // --- CONVERT DB TO SEARCHABLE FORMAT ---
        // We map your game "ids" to readable Categories
        const categoryMap = {
            'minecraft': 'Minecraft',
            'rust': 'Rust',
            'palworld': 'Palworld',
            'getting-started': 'General'
        };

        if(searchInput && resultsContainer) {
            
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                resultsContainer.innerHTML = ''; // Clear previous results

                // Hide results if query is too short (less than 2 chars)
                if(query.length < 2) {
                    resultsContainer.classList.add('hidden');
                    return;
                }

                // --- SEARCH LOGIC (Using window.faqDatabase) ---
                // Filters by Title OR Answer content OR Game name
                const filtered = window.faqDatabase.filter(article => 
                    article.title.toLowerCase().includes(query) || 
                    article.answer.toLowerCase().includes(query) ||
                    article.game.toLowerCase().includes(query)
                );

                // Render Results
                if(filtered.length > 0) {
                    resultsContainer.classList.remove('hidden');
                    filtered.forEach(article => {
                        // Determine the correct link based on the game
                        let linkUrl = "";
                        if(article.game === 'getting-started') {
                            linkUrl = `getting-started.html#${article.id}`; 
                        } else {
                            linkUrl = `${article.game}.html#${article.id}`;
                        }

                        // Get nice category name (e.g. "minecraft" -> "Minecraft")
                        const displayCategory = categoryMap[article.game] || article.game.toUpperCase();

                        const link = document.createElement('a');
                        link.href = linkUrl;
                        link.className = "block px-4 py-3 border-b border-gray-700 hover:bg-gray-700 transition-colors group";
                        link.innerHTML = `
                            <div class="flex justify-between items-center">
                                <div class="text-sm font-bold text-white group-hover:text-witchly-primary transition-colors">${article.title}</div>
                                <span class="text-xs text-gray-500 uppercase tracking-wider">${displayCategory}</span>
                            </div>
                        `;
                        resultsContainer.appendChild(link);
                    });
                } else {
                    resultsContainer.classList.remove('hidden');
                    resultsContainer.innerHTML = '<div class="px-4 py-3 text-sm text-gray-500 italic">No articles found matching that query.</div>';
                }
            });

            // Hide results when clicking anywhere else on the page
            document.addEventListener('click', (e) => {
                if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
                    resultsContainer.classList.add('hidden');
                }
            });
        }
    }, 200); // Short delay to allow DB to load
});