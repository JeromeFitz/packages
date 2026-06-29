import type { PluginSpec } from 'semantic-release'

import type { GitPluginOptions } from './git.types'

/**
 * @note
 *
 * This will modify `package.json` use with caution
 * Most times you will skip this package and only use NPM publishing
 *
 */
const git = (options: GitPluginOptions): PluginSpec => {
  return [
    '@semantic-release/git',
    {
      assets:
        options.gitAssets === false
          ? false
          : ['package.json', ...(options.gitAssets ?? [])],
      message:
        options.message ??
        // biome-ignore lint/suspicious/noTemplateCurlyInString: template processed by semantic-release at runtime
        '🔖️ `${nextRelease.gitTag}` [skip ci] \n\n${nextRelease.notes}',
    },
  ]
}

export { git }
