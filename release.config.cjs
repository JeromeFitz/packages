const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: './.env' })

const release = require('./packages/semantic/release.config.cjs')
module.exports = { ...release }
