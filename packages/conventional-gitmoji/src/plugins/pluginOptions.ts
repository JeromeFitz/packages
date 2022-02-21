import type { Options as SemanticReleaseOptions, PluginSpec } from 'semantic-release'

import type { PluginOptions } from './pluginOptions.types'

import { commitAnalyzer, git, github, npm } from './index'

const getPluginOptions = (_options?: PluginOptions): SemanticReleaseOptions => {
  const options = {
    /**
     * @note Will only load the plugin if set to true
     */
    enableGit: false,
    enableGithub: false,
    enableNPM: false,
    enableReleaseNotes: false,
    /**
     * @note Customized defaults
     */
    pkgRoot: './dist',
    // tarballDir: 'release',
    ..._options,
  }

  const releaseNotesConfig = [
    // @todo(release-notes) determine what title for this
    // '@semantic-release/release-notes-generator',
    '@jeromefitz/release-notes',
    {
      config: '@jeromefitz/conventional-gitmoji',
    },
  ]

  const { npmPublish, pkgRoot, tarballDir } = options
  const npmConfig = npm({ npmPublish, pkgRoot, tarballDir })

  const {
    addReleases,
    assignees,
    failComment,
    failTitle,
    githubApiPathPrefix,
    githubAssets,
    githubUrl,
    labels,
    proxy,
    releasedLabels,
  } = options
  const githubConfig = github({
    addReleases,
    assignees,
    failComment,
    failTitle,
    githubApiPathPrefix,
    githubAssets,
    githubUrl,
    labels,
    proxy,
    releasedLabels,
  })

  const gitConfig = git(options)

  const plugins: PluginSpec[] = [
    commitAnalyzer(options.releaseRules),
    options.enableReleaseNotes ? releaseNotesConfig : '',
    options.enableNPM ? npmConfig : '',
    options.enableGithub ? githubConfig : '',
    options.enableGit ? gitConfig : '',
  ]

  return {
    plugins: plugins.filter((plugin) => !!plugin),
  }
}

export { getPluginOptions }
