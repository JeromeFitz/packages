import type { IReleaseRule } from '@jeromefitz/conventional-gitmoji'

import type { PluginSpec } from 'semantic-release'

import { releaseRules as releaseRulesDefault } from '@jeromefitz/conventional-gitmoji'

const commitAnalyzer = (releaseRulesPassed: IReleaseRule[] = []): PluginSpec => {
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
