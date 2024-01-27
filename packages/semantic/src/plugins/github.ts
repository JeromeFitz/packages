import type { PluginSpec } from 'semantic-release'

import type { GithubPluginOptions } from './github.types.js'

const github = (options: GithubPluginOptions = {}): PluginSpec => {
  const optionsEmpty =
    options &&
    Object.values(options).filter((i) => typeof i !== 'undefined').length === 0

  if (!options || optionsEmpty)
    return [
      '@semantic-release/github',
      {
        // @note(github) ensure someone has to override to put these on, haha
        addReleases: false,
        labels: false,
        releasedLabels: false,
        successComment: false,
      },
    ]

  const { githubAssets, ...config } = options
  return [
    '@semantic-release/github',
    {
      // @note(github) ensure someone has to override to put these on, haha
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
