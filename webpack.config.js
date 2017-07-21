const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                enforce: "pre",
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {plugins: [require('autoprefixer'),]}
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'jshint-loader',
                    options: {camelcase: true, emitErrors: false, failOnHint: false, esversion: 6}
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpg)$/,
                use: ['file-loader?name=img/[name].[ext]', 'image-webpack-loader',]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader', options: {presets: ['env']}}
            }
        ]
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {warnings: false},
        output: {comments: false,}
    })],

    devtool: "eval-source-map",

    devServer: {hot: true, port: 3000}
};