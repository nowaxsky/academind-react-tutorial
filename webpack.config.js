const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist') + "/app",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: path.resolve(__dirname, 'dist'),
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }

};