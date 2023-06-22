const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pk = require('../package.json');
const {prod_Path} = require("./path");
const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        app: [
            './src/index.js'
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, prod_Path),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './index.html',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            WIDGET_VERSION: JSON.stringify(pk.version),
            'process.env.NODE_ENV': JSON.stringify("PRODUCTION")
        }),
        new VueLoaderPlugin()
    ]
};