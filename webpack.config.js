var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: ['babel-polyfill', PATHS.app],
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "app",
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    // display only errors to reduce the amount of output
    stats: 'errors-only',

    // parse host and port from env so this is easy
    // to customize
    host: 'localhost',
    port: 8005
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Premium app'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query:{
          presets: ['es2015']
        }
      }
    ]
  }
};
