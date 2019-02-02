var webpack = require("webpack");

module.exports = {
    entry: './script.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                loader: 'babel-loader',
                exclude: /node-modules/
            }
        ]
    }
};
