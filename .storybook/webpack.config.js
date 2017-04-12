const path = require('path')

const src = path.resolve(__dirname, '../src/')

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ],
  },
  resolve: {
    alias: {
      components: src + '/components',
      modules: src + '/modules',
      assets: src + '/assets',
      utils: src + '/utils',
      provider: path.resolve(__dirname, 'Provider.js')
    },
    extensions: ['', '.js']
  },
};
