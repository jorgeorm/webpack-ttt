const HTMLWebpackPlugin = require('html-webpack-plugin');
const HMRPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = {
    devServer: {
        stats: "errors-only",
        
        host: process.env.HOST | 'localhost',
        port: process.env.PORT,
        overlay: true,

        hot: true,
    },
    plugins: [
        new HTMLWebpackPlugin({ title: 'Webpack html' }),
        new HMRPlugin()
    ]
};
