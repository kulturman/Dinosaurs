/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname)
    },
    devServer: {
        static: path.join(__dirname)
    }
}