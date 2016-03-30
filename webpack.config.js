var path = require('path');

module.exports = {
    entry: "./src/js/wargames.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: '/public/'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css",
            include: path.join(__dirname, 'src')
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            include: path.join(__dirname, 'src')
        }, ]
    }
};
