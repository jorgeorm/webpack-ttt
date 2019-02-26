const wpMerge = require('webpack-merge');
const styles = require('webpack-lib').styles;

module.exports = wpMerge([
    styles.extractCSS({ filename: '[name]-[hash:8].css' })
]);