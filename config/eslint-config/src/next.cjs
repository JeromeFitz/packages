const config = require('./react.cjs')

const _extends = [
  ...config.extends,
  'plugin:@next/next/core-web-vitals',
  'plugin:@next/next/recommended',
  'plugin:turbo',
]

module.exports = {
  ...config,
  extends: _extends,
  rules: {
    '@next/next/no-html-link-for-pages': 0,
    'turbo/no-undeclared-env-vars': [
      'error',
      {
        allowList: ['^ENV_[A-Z]+$'],
      },
    ],
  },
}
