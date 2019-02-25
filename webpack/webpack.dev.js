const { styles, utils } = require('webpack-lib');
const wpMerge = require('webpack-merge');

module.exports = wpMerge([
    styles.loadCSS(),
    utils.webpackDevServer()
])