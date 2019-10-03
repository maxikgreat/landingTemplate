const path = require('path')

module.exports = {
    mode: 'development',
    entry: './js/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'js')
    }
}