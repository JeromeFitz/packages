import type { PluginSpec } from 'semantic-release'

import type { ReleaseRule } from './commitAnalyzer.types'

import { releaseRules as releaseRulesDefault } from '@jeromefitz/conventional-gitmoji'

const commitAnalyzer = (releaseRulesPassed: ReleaseRule[] = []): PluginSpec => {
  const releaseRules = [...releaseRulesDefault, ...releaseRulesPassed]

  return [
    '@semantic-release/commit-analyzer',
    {
      config: '@jeromefitz/conventional-gitmoji',
      releaseRules,
    },
  ]
}

export { commitAnalyzer }
