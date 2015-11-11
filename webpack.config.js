'use strict';

module.exports = {
    context: __dirname + '/app',
    entry: ["./index.js"],
    output: {
        path: __dirname + '/app',
        filename: "build.js"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ]
    }
};