const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pk = require('../package.json');
const {prod_Path} = require("./path");
const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

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
        filename: '[name].bundle.js',
        publicPath: path.resolve(__dirname, prod_Path),
        clean: true,
        library: "EtWidget",
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
    performance: {
        hints: false,
        maxEntrypointSize: 2048000
    },
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './index.html',
            filename: 'demo.html'
        }),
        new webpack.DefinePlugin({
            WIDGET_VERSION: JSON.stringify(pk.version),
            stats: {
                children: true
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'assets',
                    to: 'assets'
                }
            ]
        }),
        new VueLoaderPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ]
};