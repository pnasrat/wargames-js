// Karma configuration
// Generated on Wed Mar 30 2016 14:36:33 GMT-0400 (EDT)
var path = require('path');
var webpack = require('karma-webpack');

module.exports = function(config) {
    config.set({

        frameworks: ['jasmine'],
        files: [
            'src/js/*.js',
            'tests/*_spec.js'
        ],
        // list of files to exclude
        // exclude: [],
        plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher'],
        browsers: ['PhantomJS'],
        preprocessors: {
            'tests/**/*_spec.js': ['webpack'],
            'src/**/*.js': ['webpack']
        },
        reporters: ['progress'],
        webpack: {
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: "babel-loader",
                    include: path.join(__dirname, 'tests')
                }, {
                    test: /\.css$/,
                    loader: "style!css",
                    include: path.join(__dirname, 'src')
                }, {
                    test: /\.js$/,
                    loader: "babel-loader",
                    include: path.join(__dirname, 'src')
                }]
            }
        },
    })
}
