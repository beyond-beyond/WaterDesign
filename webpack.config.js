const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './examples/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist/",
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        static: "./dist",
        devMiddleware: {
            writeToDisk: true,
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './examples/index.html',
            filename: 'index.html',
        }),
        new VueLoaderPlugin(),
    ]
}