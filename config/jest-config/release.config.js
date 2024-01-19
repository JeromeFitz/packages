import { getConfig } from '@jeromefitz/semantic'
import isCI from 'is-ci'
if (!isCI) {
  const dotenv = await import('dotenv')
  dotenv.config({ path: '../../.env' })
}

import { config as configDefault } from '../../release.config.js'

// // import pkg from './package.json' assert { type: 'json' }
// // const { name } = pkg
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)

// const pkg = require('./package.json')
// const { name } = pkg
const name = '@jeromefitz/jest-config'

const branches = [
  ...configDefault.branches,
  { name: 'refactor/NICE-54', prerelease: 'canary' },
]

const configPassed = {
  ...configDefault,
  branches,
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configPassed)

export default config
