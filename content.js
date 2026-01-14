// Only Marketplace - Agresive Content Script

const enforceOnlyMarketplace = () => {
    const url = window.location.href;

    // Check if valid
    const isMarketplace = url.includes('/marketplace');
    const isSaved = url.includes('/saved');

    if (!isMarketplace && !isSaved) {
        // Stop the page from doing (almost) anything else
        window.stop();

        // Immediately redirect to Marketplace
        window.location.replace('https://www.facebook.com/marketplace');
    }
};

// Run immediately
enforceOnlyMarketplace();

// Run on every URL change (Standard API)
window.addEventListener('popstate', enforceOnlyMarketplace);
window.addEventListener('hashchange', enforceOnlyMarketplace);

// Aggressive Polling (every 500ms) - handles Facebook's internal routing
setInterval(enforceOnlyMarketplace, 500);

// Observer for title/body interactions
new MutationObserver(enforceOnlyMarketplace).observe(document, { subtree: true, childList: true });
