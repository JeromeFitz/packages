/* eslint-disable import/order */
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

const {
  getPluginsNonPublished,
  releaseConfig,
} = require('@jeromefitz/semantic-config')
const { name } = require('./package.json')

// @note(semantic-config) not a published package
const plugins = getPluginsNonPublished(releaseConfig.plugins)

const config = { ...releaseConfig, plugins, tagFormat: `${name}@\${version}` }

module.exports = config
