module.exports = {
    entry: [
        './predist/js/app.js'
    ],
    output: {
        path: './public/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
        }]
    }
}