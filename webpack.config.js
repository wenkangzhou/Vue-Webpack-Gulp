var Webpack = require("webpack");
module.exports = {
    entry: ["./src/view/entry.js"],
    output: {
        path: __dirname,
        filename: "/src/view/output.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }]
    },
    plugins: [
        new Webpack.BannerPlugin("这里是打包文件头部注释！")
    ]
}