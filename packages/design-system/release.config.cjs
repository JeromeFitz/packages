/* eslint-disable import/order */
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

const { config: configDefault } = require('../../release.config.cjs')
const { getConfig } = require('@jeromefitz/semantic')

const { name } = require('./package.json')

const branches = [
  ...configDefault.branches,
  { name: 'feature/next-notion', prerelease: 'next-notion' },
  { name: 'feature/cmdk', prerelease: 'cmdk' },
]

const configPassed = {
  ...configDefault,
  branches,
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configPassed)

module.exports = config
