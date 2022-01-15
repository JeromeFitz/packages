/* eslint-disable import/order */
const isCI = require('is-ci')
// @ci(notion) This file is run from `./dist` in build process
!isCI && require('dotenv').config({ path: '../../../.env' })

const {
  getPluginsNpmPublishFromDist,
  releaseConfig,
} = require('@jeromefitz/semantic-config')
const { name } = require('./package.json')

// @note(semantic-config) npm publish from `./dist`
const plugins = getPluginsNpmPublishFromDist(releaseConfig.plugins)

const config = { ...releaseConfig, plugins, tagFormat: `${name}@\${version}` }

module.exports = config
