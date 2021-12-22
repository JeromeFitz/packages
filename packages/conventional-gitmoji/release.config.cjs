/* eslint-disable import/order */
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

const { releaseConfig } = require('@jeromefitz/semantic-config')
const { name } = require('./package.json')

const config = { ...releaseConfig, tagFormat: `${name}@\${version}` }

module.exports = config
