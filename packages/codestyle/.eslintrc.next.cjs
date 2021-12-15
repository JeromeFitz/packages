const config = require('./.eslintrc.cjs')

module.exports = {
  ...config,
  extends: [...config.extends, 'next/core-web-vitals', 'next'],
}
