'use strict';
module.exports = {
    outputDir: '../dist',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].filename = '../views/index.html'
                return args
            });
    }
}