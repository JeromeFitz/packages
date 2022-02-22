const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

const { getConfig } = require('./dist/index.cjs')
const { name } = require('./package.json')

const config = {
  branches: [
    { name: 'main' },
    { name: 'canary', prerelease: 'canary' },
    { name: 'feature/contribs', prerelease: 'contribs' },
  ],
  enableGit: false,
  enableGithub: true,
  enableNpm: true,
  enableReleaseNotes: true,
  pkgRoot: './dist',
  tagFormat: `${name}@\${version}`,
}

// console.dir(`> config`)
// console.dir(config)

const _config = getConfig(config)

// console.dir(`> _config`)
// console.dir(_config)

module.exports = _config
