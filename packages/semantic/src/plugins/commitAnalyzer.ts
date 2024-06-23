import { releaseRules as releaseRulesDefault } from '@jeromefitz/conventional-gitmoji'

import type { IReleaseRule } from '@jeromefitz/conventional-gitmoji'
import type { PluginSpec } from 'semantic-release'

function createWhatBump(config) {
  return function whatBump(commits) {
    let level = 2
    let breakings = 0
    let features = 0

    commits.forEach((commit) => {
      console.dir(`klfjasdlkfjkladsfjkladsfjlkdasfjlkadsf`)
      console.dir(commit)
      if (commit.notes.length > 0) {
        breakings += commit.notes.length
        level = 0
      } else if (commit.type === 'feat' || commit.type === 'feature') {
        features += 1
        if (level === 2) {
          level = 1
        }
      }
    })

    if (config?.preMajor && level < 2) {
      level++
    }

    return {
      level,
      reason:
        breakings === 1
          ? `There is ${breakings} BREAKING CHANGE and ${features} features`
          : `There are ${breakings} BREAKING CHANGES and ${features} features`,
    }
  }
}

const commitAnalyzer = (options): PluginSpec => {
  const releaseRulesPassed: IReleaseRule[] = options?.releaseRule || []
  const releaseRules = [...releaseRulesDefault, ...releaseRulesPassed]

  return [
    '@semantic-release/commit-analyzer',
    {
      config: '@jeromefitz/conventional-gitmoji',
      releaseRules,
      whatBump: createWhatBump(options),
    },
  ]
}

export { commitAnalyzer }
