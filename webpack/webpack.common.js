const wpMerge = require('webpack-merge');
const utils = require('webpack-lib').utils;

/**
 * Setup meta headers for the page
 */
const meta = {
    viewport: 'width=device-width, initial-scale=1.0',
    'X-UA-Compatible': { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' }
};

module.exports = wpMerge([
    utils.htmlPlugin({
        title: 'Webpack with library!!!',
        meta,
    })
]);
