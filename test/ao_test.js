'use strict';

const ao = require('../build/ao').default;

const uas = {
    iPhone: "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3"
}

const window = {
    navigator: {
        userAgent: uas.iPhone
    }
}

console.log('iPhone', ao(uas.iPhone));
