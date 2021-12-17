/* eslint-disable import/order */
import isCI from 'is-ci'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const release = require('@jeromefitz/semantic/release.config.cjs').default

// eslint-disable-next-line @typescript-eslint/no-var-requires
!isCI && require('dotenv').config({ path: '../../.env' })

import branches from './branches'

// const ci = true
// const dryRun = false
const _extends = ['semantic-release-commit-filter', 'semantic-release-monorepo']
const plugins = release.plugins

const config = {
  ...release,
  branches,
  // ci,
  // dryRun,
  extends: _extends,
  plugins,
  // repositoryUrl: `https://github.com/${name.replace('@', '')}`,
  // @todo(github) dynamically set this like before
  repositoryUrl: `https://github.com/JeromeFitz/packages`,
}

export default config
