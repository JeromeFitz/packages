/**
 * @copyright https://github.com/semantic-release/release-notes-generator
 */
import { promisify } from 'util'

// import conventionalChangelogAngular from 'conventional-changelog-angular'
import importFrom from 'import-from'
import _isPlainObject from 'lodash/isPlainObject'

/**
 * Load `conventional-changelog-parser` options. Handle presets that return either a `Promise<Array>` or a `Promise<Function>`.
 *
 * @param {Object} pluginConfig The plugin configuration.
 * @param {Object} pluginConfig.preset conventional-changelog preset ('angular', 'atom', 'codemirror', 'ember', 'eslint', 'express', 'jquery', 'jscs', 'jshint')
 * @param {string} pluginConfig.config Requierable npm package with a custom conventional-changelog preset
 * @param {Object} pluginConfig.parserOpts Additionnal `conventional-changelog-parser` options that will overwrite ones loaded by `preset` or `config`.
 * @param {Object} pluginConfig.writerOpts Additionnal `conventional-changelog-writer` options that will overwrite ones loaded by `preset` or `config`.
 * @param {Object} context The semantic-release context.
 * @param {Array<Object>} context.commits The commits to analyze.
 * @param {String} context.cwd The current working directory.
 *
 * @return {Promise<Object>} a `Promise` that resolve to the `conventional-changelog-core` config.
 */
const loadChangelogConfig = async (pluginConfig, context) => {
  const { preset, config, parserOpts, writerOpts, presetConfig } = pluginConfig
  const { cwd } = context

  // console.dir(context)
  // console.dir(`cwd: ${cwd}`)

  let loadedConfig

  if (preset) {
    const presetPackage = `conventional-changelog-${preset.toLowerCase()}`
    loadedConfig =
      importFrom.silent(__dirname, presetPackage) || importFrom(cwd, presetPackage)
  } else if (config) {
    // console.dir(`load from config:`)
    loadedConfig = importFrom.silent(__dirname, config) || importFrom(cwd, config)
    // console.dir(loadedConfig)
    // console.dir(`---`)
  } else {
    // loadedConfig = conventionalChangelogAngular
    loadedConfig = {}
  }

  loadedConfig = await (typeof loadedConfig === 'function'
    ? _isPlainObject(presetConfig)
      ? loadedConfig(presetConfig)
      : promisify(loadedConfig)()
    : loadedConfig)

  const changelogConfig = {
    parserOpts: { ...loadedConfig.parserOpts, ...parserOpts },
    writerOpts: { ...loadedConfig.writerOpts, ...writerOpts },
  }

  // console.dir(`> release-notes > config > changelog`)
  // console.dir(changelogConfig)
  return changelogConfig
}

export { loadChangelogConfig }
