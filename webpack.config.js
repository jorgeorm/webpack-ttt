const wpMerge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack/webpack.common');
const { PROD } = require('./webpack/webpack.constants');

const PATHS = {
    src: path.join(__dirname, 'src'),
};

module.exports = (mode) => {
    const envConfig = mode === PROD ?
        require('./webpack/webpack.prod')({ paths: PATHS }) :
        require('./webpack/webpack.dev');

    return wpMerge([
        { mode },
        commonConfig,
        envConfig
    ]);
};
