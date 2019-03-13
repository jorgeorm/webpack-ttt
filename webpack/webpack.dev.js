const { styles, utils, images } = require('webpack-lib');
const wpMerge = require('webpack-merge');

module.exports = wpMerge([
    images.loadImages({}),
    styles.loadCSS(),
    utils.webpackDevServer()
])