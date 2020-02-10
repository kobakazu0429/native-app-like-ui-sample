"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest")

module.exports = {
  entry: { app: path.resolve(__dirname, "../src/index.tsx") },

  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ForkTsCheckerWebpackPlugin({
      workers: 1,
      tslint: true
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      orientation: "any",
      display: "standalone",
      start_url: ".",
      ios: true,
      publicPath: "./",
      includeDirectory: true,
      name: "My Progressive Web App",
      short_name: "MyPWA",
      description: "My awesome Progressive Web App!",
      background_color: "#ffffff",
      ios: {
        "apple-mobile-web-app-title": "AppTitle",
        "apple-mobile-web-app-status-bar-style": "white"
      },
      icons: [
        {
          src: path.resolve(__dirname, "../src/assets/icon/PWA.png"),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
           src: path.resolve(__dirname, "../src/assets/icon/PWA.png"),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join("icons", "ios"),
          ios: true
        },
        {
           src: path.resolve(__dirname, "../src/assets/icon/PWA.png"),
            size: 1024,
            destination: path.join("icons", "ios"),
            ios: "startup"
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "tslint-loader",
            options: {
              typeCheck: true,
              fix: true
            }
          }
        ]
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: { transpileOnly: true }
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { url: false } }
        ]
      }
    ]
  }
};
