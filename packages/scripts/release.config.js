const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: './.env' })

const release = require('../semantic/release.config.js')
module.exports = { ...release }
