var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var CSS_DIR = path.resolve(__dirname, 'src/client/app/css');
var MATERIALIZE_DIR = path.resolve(__dirname, 'node_modules/materialize-css');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR + '/static',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.css$/,
                include: CSS_DIR,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.css/,
                include: MATERIALIZE_DIR,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};

module.exports = config;