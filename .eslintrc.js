module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended'
  ],
  rules: {
    'indent': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
}