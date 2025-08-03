import { createRequire } from 'node:module'

import { getConfig } from '@jeromefitz/semantic'

import isCI from 'is-ci'

import { config as configDefault } from '../../release.config.js'

if (!isCI) {
  const dotenv = await import('dotenv')
  dotenv.config({ path: '../../.env' })
}

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const { name } = pkg

const branches = [
  ...configDefault.branches,
  { name: 'NICE-XYZ', prerelease: 'canary' },
]

const configPassed = {
  ...configDefault,
  branches,
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configPassed)

export default config
