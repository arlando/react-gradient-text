const path = require('path');
const webpack = require('webpack');

module.exports = {
    cache: true,
    entry: './demo.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'demo.build.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }]
    },
    resolve: {
        //root: [
        //  path.join(__dirname, '..', 'node_modules')
        //],
        root: path.join('..', __dirname, 'node_modules'),
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },
    resolveLoader: {


    }
};