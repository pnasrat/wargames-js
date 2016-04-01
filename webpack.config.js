var path = require("path");

module.exports = {
    entry: "./src/js/wargames.js",
    output: {
        path: "./dist",
        filename: "bundle.js",
        publicPath: '/public/'
    },
    devServer: {
        contentBase: "public/"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css",
            include: path.join(__dirname, "src")
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            include: path.join(__dirname, "src")
        }, ]
    }
};
