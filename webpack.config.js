var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// 一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, "Root.jsx")
  },
  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },
  // 开启dev source map
  devtool: "eval-source-map",
  // 开启webpack dev server
  devServer: {
    host: "localhost",
    port: 8001,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    rules: [
      // 配置preLoaders，将eslint添加进入
      {
        test: /\.jsx?$/,
        loaders: ["eslint-loader"],
        enforce: "pre",
        include: APP_PATH
      },
      // 配置loaders，将babel添加进入
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader"],
        include: APP_PATH
      }
    ]
  },
  // 配置plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: "My first react app"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
