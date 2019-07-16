'use strict';

const keywords = require('./keywords');

function defineAllKeywords(ajv) {
    for (const [, fn] of Object.entries(keywords)) {
        fn(ajv);
    }
}

module.exports = defineAllKeywords;
