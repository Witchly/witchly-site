document.addEventListener('DOMContentLoaded', () => {
    // 1. Get URL Parameter (e.g., pricing.html?game=rust)
    const urlParams = new URLSearchParams(window.location.search);
    const gameParam = urlParams.get('game');

    // 2. Initialize the correct tab
    if (gameParam) {
        switchGame(gameParam);
    } else {
        // Default to Minecraft if no parameter is present
        switchGame('minecraft');
    }

    // 3. Add Click Listeners to Buttons
    const buttons = document.querySelectorAll('.game-tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const game = btn.getAttribute('data-game');
            switchGame(game);
        });
    });
});

function switchGame(gameName) {
    // A. Hide all plan containers
    document.querySelectorAll('.pricing-container').forEach(el => {
        el.classList.add('hidden');
    });

    // B. Show the selected plan container
    const selectedContainer = document.getElementById(`plans-${gameName}`);
    if (selectedContainer) {
        selectedContainer.classList.remove('hidden');
    }

    // C. Update Button Styles (Active vs Inactive)
    document.querySelectorAll('.game-tab-btn').forEach(btn => {
        // Reset all buttons to "Inactive" style
        btn.classList.remove('bg-witchly-primary', 'text-white', 'border-transparent');
        btn.classList.add('bg-witchly-surface', 'text-gray-400', 'border-gray-700');

        // Highlight the clicked button
        if (btn.getAttribute('data-game') === gameName) {
            btn.classList.remove('bg-witchly-surface', 'text-gray-400', 'border-gray-700');
            btn.classList.add('bg-witchly-primary', 'text-white', 'border-transparent');
        }
    });
}