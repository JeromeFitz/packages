type Options = {
  npmPublish: boolean
  pkgRoot: '.' | './dist'
}

const pluginOptions = (
  // @todo(types)
  plugins: any,
  { npmPublish = true, pkgRoot = './dist' }: Options
) => {
  const _plugins = plugins

  // @refactor(dynamic) eh, make this a bit more dynamic heh
  const pluginsOverride = [
    [
      '@semantic-release/npm',
      {
        npmPublish,
        pkgRoot,
      },
    ],
    [
      '@semantic-release/github',
      {
        addReleases: false,
        labels: false,
        releasedLabels: false,
        successComment: false,
      },
    ],
  ]

  /**
   * @refactor(mutation) This also _forces_ to update making
   *                     `release.config.ts` pointless kind of.
   */
  _plugins.map((plugin: any[], pluginIndex: string | number) => {
    const pluginName = plugin[0]
    pluginsOverride.map((pluginOverride) => {
      pluginName === pluginOverride[0]
        ? (_plugins[pluginIndex] = pluginOverride)
        : null
    })
  })

  return _plugins
}

export default pluginOptions
