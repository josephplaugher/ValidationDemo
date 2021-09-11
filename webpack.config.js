const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  watch: true,
  mode: 'development',
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
};