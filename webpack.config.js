const wpMerge = require('webpack-merge');

const commonConfig = require('./webpack/webpack.common');
const { PROD } = require('./webpack/webpack.constants');

module.exports = (mode) => {
    const envConfig = mode === PROD ?
        require('./webpack/webpack.prod') :
        require('./webpack/webpack.dev');

    return wpMerge([
        { mode },
        commonConfig,
        envConfig
    ]);
};
