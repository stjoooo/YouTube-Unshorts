// ==UserScript==
// @name         Remove YouTube Shorts
// @namespace    https://github.com/stjoooo/YouTube-Unshorts/
// @version      1.0
// @description  Remove YouTube Shorts, related sections, reels, filters, and tabs from YouTube pages
// @author       @stjoooo
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function removeShortsElements() {
        // Remove the sidebar Shorts link
        const shortsLink = document.querySelector('a#endpoint[title="Shorts"]');
        if (shortsLink) {
            shortsLink.remove();
            console.log("YouTube Shorts link removed.");
        }

        // Remove the Shorts section
        const shortsSection = document.querySelector('div#content.style-scope.ytd-rich-section-renderer');
        if (shortsSection) {
            shortsSection.remove();
            console.log("YouTube Shorts section removed.");
        }

        // Remove the Reel shelf renderer
        const reelShelfRenderer = document.querySelector('ytd-reel-shelf-renderer.style-scope.ytd-item-section-renderer');
        if (reelShelfRenderer) {
            reelShelfRenderer.remove();
            console.log("YouTube Reel shelf renderer removed.");
        }

        // Remove the Shorts filter chip
        const shortsChip = document.querySelector('yt-chip-cloud-chip-renderer[chip-style="STYLE_HOME_FILTER"][chip-shape-data*="Shorts"]');
        if (shortsChip) {
            shortsChip.remove();
            console.log("YouTube Shorts filter chip removed.");
        }

        // Remove the Shorts tab
        const shortsTab = document.querySelector('yt-tab-shape[tab-title="Shorts"]');
        if (shortsTab) {
            shortsTab.remove();
            console.log("YouTube Shorts tab removed.");
        }
    }

    const observer = new MutationObserver(() => {
        removeShortsElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    removeShortsElements();
})();
