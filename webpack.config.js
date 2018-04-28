const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const path = require('path')
const compileArticles = require('./compileArticles.js')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 9000
  },
  module: {
    rules: [
     {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
                options: {
                  minimize: true || {/* CSSNano Options */}
                }
            },
            "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebPackPlugin({
      inlineSource: '.(js|css)$',
      template: "./src/index.ejs",
      filename: "./index.html",
      compileArticles: compileArticles,
      parseTemplate: true,
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};
