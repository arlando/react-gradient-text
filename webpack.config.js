const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: [
            './index.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js',
        library: 'GradientText',
        libraryTarget: 'umd'
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    }
};