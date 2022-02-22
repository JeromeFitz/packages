// import type { Options as SemanticReleaseOptions, PluginSpec } from 'semantic-release'
import { parserOpts, writerOpts } from '@jeromefitz/conventional-gitmoji'
import type { PluginSpec } from 'semantic-release'

import type { PluginOptions } from './pluginOptions.types'

import { commitAnalyzer, git, github, npm } from './index'

// console.dir(`> writerOpts`)
// console.dir(writerOpts)

const getPluginOptions = (optionsPassed?: PluginOptions): PluginSpec => {
  const optionsDefault = {
    /**
     * @note Will only load the plugin if set to true
     */
    enableGit: false,
    enableGithub: true,
    enableNpm: true,
    enableReleaseNotes: true,
    enableReleaseNotesCustom: true,
    /**
     * @note Customized defaults
     */
    pkgRoot: './dist',
    // tarballDir: 'release',
  }

  const options: PluginOptions = {
    ...optionsDefault,
    ...optionsPassed,
  }

  // console.dir(`> getPluginOptions`)
  // console.dir(options)

  const releaseNotesConfig = [
    '@semantic-release/release-notes-generator',
    {
      config: '@jeromefitz/conventional-gitmoji',
      parserOpts,
      writerOpts,
    },
  ]
  const releaseNotesCustomConfig = [
    // '@jeromefitz/release-notes',
    // {
    //   config: '@jeromefitz/conventional-gitmoji',
    // },
    '@jeromefitz/release-notes-generator',
    {
      config: '@jeromefitz/conventional-gitmoji',
      parserOpts,
      writerOpts,
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

  const plugins: PluginSpec = _plugins.filter((plugin) => !!plugin)
  // console.dir(`> plugins`)
  // console.dir(plugins)
  return plugins
}

export { getPluginOptions }
