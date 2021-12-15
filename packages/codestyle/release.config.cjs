/* eslint-disable import/order */
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: './.env' })

const release = require('@jeromefitz/semantic/release.config.cjs').default
const { name } = require('./package.json')

const config = { ...release, tagFormat: `${name}@\${version}` }

module.exports = config
