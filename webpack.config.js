var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: __dirname
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js']
  }
}
