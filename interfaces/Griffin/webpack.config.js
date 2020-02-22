const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "templates/static"),
    publicPath: "./static/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new LiveReloadPlugin({ appendScriptTag: true }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: path.resolve(__dirname, "templates/main.tmpl"),
    }),
  ],
};
