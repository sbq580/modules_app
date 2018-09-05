var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/es6-lib.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/test')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    mode: 'development',
    devtool: 'eval-source-map'
}