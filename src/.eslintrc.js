module.exports = {
  extends: ['standard', 'standard-jsx'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'babel'],
  rules: {
    'react/jsx-curly-spacing': ['error', { when: 'never' }],
    'react/prop-types': 'error',
    'generator-star-spacing': ['error', { before: false, after: true }]
  }
}