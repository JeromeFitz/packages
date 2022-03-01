/* eslint-disable import/order */
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

const { config: configDefault } = require('../../release.config.cjs')
const { getConfig } = require('@jeromefitz/semantic')

const { name } = require('./package.json')

const configPassed = {
  ...configDefault,
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configPassed)

module.exports = config
