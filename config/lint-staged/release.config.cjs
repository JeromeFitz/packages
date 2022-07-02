const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

const { getConfig } = require('../../release.config.cjs')

const { name } = require('./package.json')

const configOverride = {
  dryRun: true,
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configOverride)

console.dir(`> config`)
console.dir(config)

module.exports = config
