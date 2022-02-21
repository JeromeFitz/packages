import type { PluginSpec } from 'semantic-release'

import type { ReleaseRule } from './commitAnalyzer.types'

const commitAnalyzer = (releaseRules: ReleaseRule[] = []): PluginSpec => [
  '@semantic-release/commit-analyzer',
  {
    // @todo(release-notes) what / where is this named?
    config: '@jeromefitz/conventional-gitmoji',
    releaseRules,
  },
]

export { commitAnalyzer }
