
module.exports = function(config) {
    config.set({

        frameworks: ['jasmine'],
        files: [
            'src/js/*.js',
            'tests/*_spec.js'
        ],
        // list of files to exclude
        exclude: [
        ],
        plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
        browsers: ['PhantomJS'],
        reporters: ['progress'],
    })
}
