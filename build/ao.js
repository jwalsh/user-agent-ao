'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ao;
/*
 * ao
 * https://github.com/jwalsh/aojs
 *
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

function ao() {
  'use strict';

  var ua = arguments.length <= 0 || arguments[0] === undefined ? window.navigator.userAgent : arguments[0];
  var BOTS_RE = /AhefsBot|Baiduspider|bingbot|Googlebot|MJ12bot|YandexBot|Crawler/;
  // https://developer.chrome.com/multidevice/user-agent
  var MOBILES_RE = /iPhone|iPad|iPod|Android/;
  return ua.search(MOBILES_RE);
}