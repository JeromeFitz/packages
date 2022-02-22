/* eslint-disable import/order */
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

// const { config: configDefault, getConfig } = require('../../release.config.cjs')
const { config: configDefault } = require('../../release.config.cjs')
const { getConfig } = require('@jeromefitz/semantic')

const { name } = require('./package.json')

const config = {
  ...configDefault,
  // branches: [
  //   { name: 'main' },
  //   { name: 'canary', prerelease: 'canary' },
  //   { name: 'feature/contribs', prerelease: 'contribs' },
  // ],
  enableGit: false,
  enableGithub: true,
  enableNpm: true,
  enableReleaseNotes: true,
  pkgRoot: './dist',
  tagFormat: `${name}@\${version}`,
}

const _config = getConfig(config)

console.dir(`_config`)
console.dir(_config)

module.exports = _config
