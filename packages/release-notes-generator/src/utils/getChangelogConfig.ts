/**
 * @copyright https://github.com/semantic-release/release-notes-generator
 */
import { promisify } from 'util'

// import conventionalChangelogAngular from 'conventional-changelog-angular'
import importFrom from 'import-from'
import _isPlainObject from 'lodash/isPlainObject'

const getChangelogConfig = async (pluginConfig, context) => {
  const { preset, config, parserOpts, writerOpts, presetConfig } = pluginConfig
  const { cwd } = context

  let loadedConfig

  if (preset) {
    const presetPackage = `conventional-changelog-${preset.toLowerCase()}`
    loadedConfig =
      importFrom.silent(__dirname, presetPackage) || importFrom(cwd, presetPackage)
  } else if (config) {
    loadedConfig = importFrom.silent(__dirname, config) || importFrom(cwd, config)
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

  return changelogConfig
}

export { getChangelogConfig }
