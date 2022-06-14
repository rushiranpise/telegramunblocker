// ==UserScript==
// @name             Unblock Telegram Links
// @namespace        https://github.com/NRSA-devs/telegramunblocker
// @version          0.1
// @id               telegramunblocker@https://github.com/NRSA-devs/telegramunblocker
// @description      Redirect t.me to telegram.me
// @author           rushiranpise - NRSA-devs
// @match            *://t.me/*
// @grant             none
// @run-at         document-start
// @run-at         document-end
// @run-at         document-idle
// ==/UserScript==

document.location = document.URL.replace('t.me','telegram.me');
