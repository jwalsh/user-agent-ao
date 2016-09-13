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
    let BOTS_RE=/60Spider|AhrefsBot|Baiduspider|Baiduspider-image|DuckDuckGo-Favicons-Bot|Exabot|Feedfetcher-Google|Feedfetcher-Google|Googlebot|Googlebot|MJ12bot|Mail.RU_Bot|PhantomJS|SAMSUNG-SGH-E250|SafeDNSBot|SemrushBot|Seznam screenshot-generator|SeznamBot|Sogou web spider|Uptimebot|Yahoo! Slurp|YandexBot|bingbot|linkdexbot|spbot/;

    // https://developer.chrome.com/multidevice/user-agent
    let MOBILES_RE=/iPhone|iPad|iPod|Android/;
    return ua.search(MOBILES_RE);
}
