var webpack = require('webpack');
var path = require('path');

const PATHS = {
    app: path.join(__dirname, './src/public/js/app.js'),
    build: './dist/public/js'
};

module.exports = {
    devtool: 'source-map',
    entry: [
        PATHS.app
    ],
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {
                minimize: true,
                sourceMap: true,
                compress: {
                    warnings: false
                }
            }
        ),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
}