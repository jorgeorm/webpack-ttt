module.exports = {
    devServer: {
        stats: "errors-only",

        host: process.env.HOST || 'localhost',
        port: process.env.PORT,

        overlay: true,
    }
}