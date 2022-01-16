const { pluginOptions, releaseConfig } = require('../../release.config.cjs')

const { name } = require('./package.json')

const plugins = pluginOptions(releaseConfig.plugins, {
  npmPublish: false,
  pkgRoot: './dist',
})
const config = { ...releaseConfig, plugins, tagFormat: `${name}@\${version}` }

module.exports = config
