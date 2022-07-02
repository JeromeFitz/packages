const { getConfig } = require('../../release.config.cjs')

const { name } = require('./package.json')

const configOverride = {
  dryRun: true,
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configOverride)

module.exports = config
