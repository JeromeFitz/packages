module.exports = {
  env: {
    jest: true,
  },
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
  },
}
