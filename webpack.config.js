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

  devtool: "cheap-source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js']
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
