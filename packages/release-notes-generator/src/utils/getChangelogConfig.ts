/**
 * @copyright https://github.com/semantic-release/release-notes-generator
 */
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

// import conventionalChangelogAngular from 'conventional-changelog-angular'
import importFrom from 'import-from-esm'
import _isPlainObject from 'lodash/isPlainObject.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const getChangelogConfig = async (pluginConfig, context) => {
  const { config, parserOpts, preset, presetConfig, writerOpts } = pluginConfig
  const { cwd } = context

  let loadedConfig: any

  if (preset) {
    const presetPackage = `conventional-changelog-${preset.toLowerCase()}`
    /**
     * @todo(semantic)
     * UNKNOWN
     * https://github.com/semantic-release/commit-analyzer/commit/f3b88d3e7409b0bac38cb58bd04f19506f2f6159
     */
    // @ts-ignore
    loadedConfig = await (
      (await importFrom.silent(__dirname, presetPackage)) ||
      (await importFrom(cwd, presetPackage))
    )(presetConfig)
  } else if (config) {
    // @ts-ignore
    loadedConfig = await (
      (await importFrom.silent(__dirname, config)) || (await importFrom(cwd, config))
    )()
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
