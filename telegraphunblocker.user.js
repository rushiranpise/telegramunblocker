// ==UserScript==
// @name             Unblock Telegraph Links
// @namespace        https://github.com/NRSA-devs/telegramunblocker
// @version          0.1
// @id               telegraphunblocker@https://github.com/NRSA-devs/telegramunblocker
// @description      Redirect telegra.ph to graph.org
// @author           rushiranpise - NRSA-devs
// @match            *://telegra.ph/*
// @grant            none
// ==/UserScript==

(function() {
    'use strict';

    var currentUrl = window.location.href;
    var newUrl = currentUrl.replace(/telegra\.ph\//, 'graph.org/');

    if (currentUrl !== newUrl) {
        window.location.href = newUrl;
    }
})();
