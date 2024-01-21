import type { PluginSpec } from 'semantic-release'

import type { NPMPluginOptions } from './npm.types.js'

const npm = (options?: NPMPluginOptions): PluginSpec => {
  if (
    !options ||
    (typeof options.pkgRoot !== 'string' &&
      typeof options.npmPublish !== 'boolean' &&
      typeof options.tarballDir === 'undefined')
  )
    return '@semantic-release/npm'

  return [
    '@semantic-release/npm',
    {
      // npmPublish: true,
      // tarballDir: 'release',
      // @note this may be oddly expensive
      // @ref https://prateeksurana.me/blog/why-using-object-spread-with-reduce-bad-idea/
      ...options,
    },
  ]
}

export { npm }
