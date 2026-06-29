import type { PluginSpec } from 'semantic-release'

import type { GithubPluginOptions } from './github.types'

const github = (options: GithubPluginOptions = {}): PluginSpec => {
  const { githubAssets, ...config } = options
  return [
    '@semantic-release/github',
    {
      addReleases: false,
      assets: githubAssets,
      labels: false,
      releasedLabels: false,
      successComment: false,
      ...config,
    },
  ]
}

export { github }
