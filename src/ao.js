/*
 * ao
 * https://github.com/jwalsh/aojs
 *
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */


module.exports = (function() {
  'use strict';

  // https://developer.chrome.com/multidevice/user-agent
  var MOBILES_RE=/iPhone|iPad|iPod|Android/;

  // https://support.google.com/webmasters/answer/1061943?hl=en
  var BOTS_RE=/60Spider|AhrefsBot|Baiduspider|Baiduspider-image|DuckDuckGo-Favicons-Bot|Exabot|Feedfetcher-Google|Feedfetcher-Google|Googlebot|Googlebot|MJ12bot|Mail.RU_Bot|PhantomJS|SAMSUNG-SGH-E250|SafeDNSBot|SemrushBot|Seznam screenshot-generator|SeznamBot|Sogou web spider|Uptimebot|Yahoo! Slurp|YandexBot|bingbot|linkdexbot|spbot/;

  var is = function(re) {
    return function(ua) {
      var ua = ua ? ua : window.navigator.userAgent;
      return ua.search(re) !== -1;
    };
  };

  return {
    isMobile: is(MOBILES_RE),
    isBot: is(BOTS_RE)
  }

}());
