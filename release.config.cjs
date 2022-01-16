/* eslint-disable import/order */
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: './.env' })

const pluginOptions =
  require('@jeromefitz/semantic-config/dist/pluginOptions.cjs').default

const releaseConfig =
  require('@jeromefitz/semantic-config/dist/release.config.cjs').default

module.exports = { pluginOptions, releaseConfig }
