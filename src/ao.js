/*
 * ao
 * https://github.com/jwalsh/aojs
 *
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

export default function ao(ua = window.navigator.userAgent) {
    'use strict';
    // https://support.google.com/webmasters/answer/1061943?hl=en
    let BOTS_RE=/AhefsBot|Baiduspider|bingbot|Googlebot|MJ12bot|YandexBot|Crawler/;
    // https://developer.chrome.com/multidevice/user-agent
    let MOBILES_RE=/iPhone|iPad|iPod|Android/;
    return ua.search(MOBILES_RE);
}
