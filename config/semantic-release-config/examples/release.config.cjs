const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: './.env' })

const { name } = require('./package.json')

const config = {
  branches: [
    // x.y.z
    { name: 'main' },
    // x.y.z-develop.1|2|3...
    { name: 'canary', prerelease: 'canary' },
    // x.y.z-develop.1|2|3...
    { name: 'develop', prerelease: 'develop' },
  ],
  extends: ['@jeromefitz/semantic-release-config'],
  tagFormat: `${name}@\${version}`,
}

module.exports = config
