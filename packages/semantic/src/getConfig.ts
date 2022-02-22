import type { Options as SemanticReleaseOptions } from 'semantic-release'

import { getPluginOptions } from './plugins'

/**
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

  return config
}

export { getConfig }
