// Only Marketplace - Agresive Content Script

const enforceOnlyMarketplace = () => {
    const url = window.location.href;

    // Safety check: Don't block our own blocked page
    if (url.includes('blocked.html')) return;

    // Check if valid
    const isMarketplace = url.includes('/marketplace');

    if (!isMarketplace) {
        // Stop the page from doing (almost) anything else
        window.stop();

        // Immediately redirect
        const blockedUrl = chrome.runtime.getURL('blocked.html');
        window.location.replace(blockedUrl);
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
