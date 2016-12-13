var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    filename: 'index.js',
    publicPath: '/static/',
    path: process.env.NODE_ENV === 'production'
      ? path.resolve(__dirname, 'build', 'release', 'static')
      : path.resolve(__dirname, 'build', 'debug', 'static')
  },

  devServer: {
    historyApiFallback: {
      index: 'index.html'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  postcss: function() {
    return [
      require('precss'),
      require('autoprefixer'),
    ]
  },

  resolve: {
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
