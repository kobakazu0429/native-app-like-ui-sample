"use strict";

const path = require("path");
const merge = require("webpack-merge");
const internalIp = require('internal-ip')
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    host: internalIp.v4.sync(),
    useLocalIp: true,
    port: 5000,
    contentBase: path.resolve(__dirname, "../public"),
    watchContentBase: true,
    noInfo: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    overlay: true,
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|eot|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "/",
              publicPath: "http://localhost:5000/"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "/",
              mimetype: "application/font-woff",
              publicPath: "http://localhost:5000/"
            }
          }
        ]
      }
    ]
  }
});
