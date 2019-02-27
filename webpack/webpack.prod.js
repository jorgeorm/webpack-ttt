const wpMerge = require('webpack-merge');
const styles = require('webpack-lib').styles;
const glob = require('glob');

module.exports = ({ paths }) => wpMerge([
    styles.extractCSS({ filename: '[name].css' }),
    styles.purgeCSS({ paths: glob.sync(`${paths.src}/**/*.js?(x)`, { nodir: true }) }),
]);