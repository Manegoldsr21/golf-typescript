const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src", "index.tsx"),
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "./public", "index.html"),
    }),
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // Handle .ts and .tsx file via ts-loader.
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  devServer: {
    port: 3042,
    historyApiFallback: true,
    //overlay: true,
    open: true,
  },
};
