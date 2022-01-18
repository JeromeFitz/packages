const config = require('./.eslintrc.cjs')

const _extends = [...config.extends, 'next/core-web-vitals', 'next']

module.exports = {
  ...config,
  extends: _extends,
}
