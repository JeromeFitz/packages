const config = require('./index.cjs')

module.exports = {
  ...config,
  plugins: [...config.plugins, require('prettier-plugin-tailwindcss')],
}
