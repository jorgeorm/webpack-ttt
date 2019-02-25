const wpMerge = require('webpack-merge');
const utils = require('webpack-lib').utils;

module.exports = wpMerge([
    utils.htmlPlugin({
        title: 'Webpack with library!!!'
    })
]);
