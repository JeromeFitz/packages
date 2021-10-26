const config = require('./.eslintrc.react.js')

module.exports = {
  ...config,
  extends: [...config.extends, 'next'],
}
