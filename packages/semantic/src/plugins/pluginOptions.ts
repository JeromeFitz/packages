import { parserOpts, writerOpts } from '@jeromefitz/conventional-gitmoji'

import type { PluginSpec } from 'semantic-release'

import type { PluginOptions } from './pluginOptions.types.js'

import { commitAnalyzer, git, github, npm } from './index.js'

const getPluginOptions = (optionsPassed?: PluginOptions): PluginSpec[] => {
  const optionsDefault = {
    /**
     * @note Will only load the plugin if set to true
     */
    enableGit: false,
    enableGithub: true,
    enableNpm: true,
    enableReleaseNotes: false,
    enableReleaseNotesCustom: true,
    /**
     * @note Customized defaults
     */
    pkgRoot: './dist',
    // tarballDir: 'release',
  }

  /**
   * @todo(types) any
   */
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  const options: any | PluginOptions = {
    ...optionsDefault,
    ...optionsPassed,
  }

  const releaseNotesConfig = [
    '@semantic-release/release-notes-generator',
    {
      config: '@jeromefitz/conventional-gitmoji',
      parserOpts,
      writerOpts,
    },
  ]
  const releaseNotesCustomConfig = [
    '@jeromefitz/release-notes-generator',
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

  const _plugins: any = [
    commitAnalyzer(options.releaseRules),
    options.enableReleaseNotes ? releaseNotesConfig : '',
    options.enableReleaseNotesCustom ? releaseNotesCustomConfig : '',
    options.enableNpm ? npmConfig : '',
    options.enableGithub ? githubConfig : '',
    options.enableGit ? gitConfig : '',
  ]

  const plugins: PluginSpec[] = _plugins.filter((plugin) => !!plugin)

  return plugins
}

export { getPluginOptions }
