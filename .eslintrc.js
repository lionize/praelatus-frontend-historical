var path = require('path')

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js'
      }
    }
  },
  
  rules: {
    semi: 0,
    'jsx-quotes': 0,
    'no-undef': 0,

    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/imports-first': 0,
    'import/prefer-default-export': 0,

    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
  }
}
