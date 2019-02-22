const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        stats: "errors-only",

        host: process.env.HOST | 'localhost',
        port: process.env.PORT,
        overlay: true,
    },
    plugins: [
        new HTMLWebpackPlugin({ title: 'Webpack html' })
    ]
};
