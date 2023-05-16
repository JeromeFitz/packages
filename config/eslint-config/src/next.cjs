const config = require('./react.cjs')

const nextConfig = {
  ...config,
  extends: [
    ...config.extends,
    'plugin:storybook/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:@next/next/recommended',
  ],
  plugins: [...config.plugins, 'turbo'],
  rules: {
    ...config.rules,
    '@next/next/no-html-link-for-pages': 0,
    'turbo/no-undeclared-env-vars': [
      'error',
      {
        allowList: ['^ENV_[A-Z]+$'],
      },
    ],
  },
}

module.exports = nextConfig
