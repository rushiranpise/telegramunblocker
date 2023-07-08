// ==UserScript==
// @name             Unblock Telegram Links
// @namespace        https://github.com/NRSA-devs/telegramunblocker
// @version          0.1
// @id               telegramunblocker@https://github.com/NRSA-devs/telegramunblocker
// @description      Redirect t.me to telegram.me
// @author           rushiranpise - NRSA-devs
// @match           *://*.t.me/*
// @grant           none
// ==/UserScript==

(function() {
    'use strict';

    var currentUrl = window.location.href;
    var newUrl = currentUrl.replace(/t\.me\//, 'telegram.me/');

    if (currentUrl !== newUrl) {
        window.location.href = newUrl;
    }
})();
