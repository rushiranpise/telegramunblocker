// ==UserScript==
// @name             Unblock Telegram Links
// @namespace        rushiranpise
// @version          0.1
// @description      Redirect t.me to telegram.me
// @author           rushiranpise //NRSA-devs
// @include          https://t.me/*
// @include          http://t.me/*
// @grant             none
// ==/UserScript==
// @run-at         document-start
// @run-at         document-end
// @run-at         document-idle

document.location = document.URL.replace('t.me','telegram.me');
