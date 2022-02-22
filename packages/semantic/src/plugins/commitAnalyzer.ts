import { releaseRules as releaseRulesDefault } from '@jeromefitz/conventional-gitmoji'
import type { ReleaseRuleTypes } from '@jeromefitz/conventional-gitmoji'
// import type { PluginSpec } from 'semantic-release'

// import type { ReleaseRule } from './commitAnalyzer.types'
// @note(semantic-release) can we re-use types here?

const commitAnalyzer = (releaseRulesPassed: ReleaseRuleTypes[] = []) => {
  const releaseRules = [...releaseRulesDefault, ...releaseRulesPassed]
  // console.dir(`> releaseRules`)
  // console.dir(releaseRules)

  return [
    '@semantic-release/commit-analyzer',
    {
      // @todo(release-notes) what / where is this named?
      config: '@jeromefitz/conventional-gitmoji',
      releaseRules,
    },
  ]
}

export { commitAnalyzer }
