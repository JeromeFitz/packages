import type { PluginSpec } from 'semantic-release'

import type { GitPluginOptions } from './git.types.js'

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
        typeof options.gitAssets === 'boolean'
          ? false
          : ['package.json']
              // @todo(NICE-129) eslint
              // eslint-disable-next-line no-extra-boolean-cast
              .concat(!!options.gitAssets ? options.gitAssets : [])
              .filter((a) => a),
      message: options.message
        ? options.message
        : '🔖️ `${nextRelease.gitTag}` [skip ci] \n\n${nextRelease.notes}',
    },
  ]
}

export { git }
