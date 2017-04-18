'use strict';

// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [require('karma-jasmine'), require('karma-chrome-launcher'), require('karma-jasmine-html-reporter'), require('karma-coverage-istanbul-reporter')],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [{ pattern: './src/app/**/*.test.js', watched: false }],
        mime: {
            'text/javascript': ['js']
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
//# sourceMappingURL=karma.conf.js.map