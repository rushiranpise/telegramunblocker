// ==UserScript==
// @id               telegramunblocker@https://github.com/NRSA-devs/telegramunblocker
// @name             Unblock Telegram Links
// @namespace        https://github.com/NRSA-devs/telegramunblocker
// @version          0.1
// @description      Redirect t.me to telegram.me
// @author           rushiranpise - NRSA-devs
// @include          https://t.me/*
// @include          http://t.me/*
// @grant             none
// @run-at         document-start
// ==/UserScript==

document.location = document.URL.replace('t.me','telegram.me');
