# <img src="OnlyMarketplace_logo.png" width="100" align="center" alt="Only Marketplace Logo"> Only Marketplace

**Only Marketplace** is a minimal Chrome Extension designed to help you focus. It strictly blocks the main Facebook Feed (and other distracting areas) while ensuring **Facebook Marketplace** remains fully accessible.

## Features

-   **Zero Dependencies**: Written in pure, vanilla JavaScript. No tracking, no frameworks, no bloat.
-   **Strict Blocking**: Automatically redirects `facebook.com` requests to a "Focus Mode" page.
-   **Marketplace Exception**: Explicitly allows access to `facebook.com/marketplace`.
-   **SPA Support**: Intelligent navigation monitoring ensures you aren't redirected if you click a link within Marketplace, but redirects you immediately if you try to go Home.

## Installation

Since this extension is not on the Chrome Web Store, you must install it manually:

1.  Download or Clone this repository.
2.  Open Chrome and navigate to `chrome://extensions`.
3.  Enable **Developer Mode** (toggle switch in the top-right corner).
4.  Click **Load Unpacked** (top-left).
5.  Select the folder containing this README.

## Usage

-   Go to [facebook.com](https://www.facebook.com) -> **Blocked**.
-   Go to [facebook.com/marketplace](https://www.facebook.com/marketplace) -> **Allowed**.

## License

Free to use and modify. Focus on what matters!
