const config = require('./.eslintrc.react.cjs')

module.exports = {
  ...config,
  extends: [...config.extends, 'next'],
}
