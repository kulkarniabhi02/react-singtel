const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3040,
  },
  module: {
    // exclude node_modules
    rules: [
        {
            test: /\.(js|jsx)$/,         // <-- added `|jsx` here
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],    // <-- added `.jsx` here
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'less-loader' }
            ]
        }
    ]
  }
};