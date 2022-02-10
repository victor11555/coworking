const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    mode: "development",
    devServer: {
        host: 'localhost',
        port: 3000,
        overlay: true,
        open: true
    },
    plugins: [
        new HTMLWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin()
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
}