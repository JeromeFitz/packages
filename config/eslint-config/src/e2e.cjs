const config = require('./react.cjs')

const e2econfig = {
  ...config,
  extends: [
    ...config.extends,
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: [...config.plugins, 'turbo'],
}

module.exports = e2econfig
