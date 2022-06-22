const config = require('./react.cjs')

const _extends = [
  ...config.extends,
  'plugin:@next/next/core-web-vitals',
  'plugin:@next/next/recommended',
]

module.exports = {
  ...config,
  extends: _extends,
}
