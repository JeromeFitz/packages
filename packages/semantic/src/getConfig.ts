import isCI from 'is-ci'
import type { Options as SemanticReleaseOptions } from 'semantic-release'

import { getPluginOptions } from './plugins'

// eslint-disable-next-line @typescript-eslint/no-var-requires
!isCI && require('dotenv').config({ path: './.env' })

/**
 * @todo allow override so we can get away from:
 * - @jeromefitz/semantic-config
 *
 * Should receive:
 * - ci
 * - debug
 * - dryRun
 * - branches
 * - extends
 * - plugins
 * - tagFormat
 *
 * While defaulting to values we see below.
 *
 */

/**
 * @todo
 * - config type
 * - - merge = with defaults
 * - - override = takeover completely
 *
 */
const getConfig = (configPassed = {}): SemanticReleaseOptions => {
  const plugins = getPluginOptions(configPassed)
  // const configInit: SemanticReleaseOptions = {
  const configInit: any = {
    branches: [{ name: 'main' }, { name: 'canary', prerelease: 'canary' }],
    extends: ['semantic-release-commit-filter'],
    plugins,
    tagFormat: `v\${version}`,
  }

  const config: SemanticReleaseOptions = {
    ...configInit,
    ...configPassed,
  }

  // console.dir(`> getConfig`)
  // console.dir(config)

  return config
}

export { getConfig }
