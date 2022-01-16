/* eslint-disable import/order */
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: './.env' })

const { pluginOptions, releaseConfig } = require('@jeromefitz/semantic-config')

module.exports = { pluginOptions, releaseConfig }
