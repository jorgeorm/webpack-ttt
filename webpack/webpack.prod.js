const wpMerge = require('webpack-merge');
const { styles, images } = require('webpack-lib');
const glob = require('glob');

const imgWpLoaderOpts = images.DEFAULT_IMAGE_WP_OPTIONS;
const urlLoaderOpts = { limit: 6000, name: '[name].[ext]' };

module.exports = ({ paths }) => wpMerge([
    images.loadImages({ urlLoaderOpts, imgWpLoaderOpts }),
    styles.extractCSS({ filename: '[name]_[hash].css' }),
    styles.purgeCSS({ paths: glob.sync(`${paths.src}/**/*.js?(x)`, { nodir: true }) }),
]);