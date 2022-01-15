// @todo(dynamic) eh, make this a bit more dynamic heh
const pluginsOverride = [
  [
    '@semantic-release/npm',
    {
      npmPublish: true,
      pkgRoot: './dist',
    },
  ],
]

// @todo(types)
const getPluginsNpmPublishFromDist = (
  plugins: any,
  flgNpmPublishFromDist = false
) => {
  const _plugins = plugins

  /**
   * @refactor(mutation)
   */
  if (!flgNpmPublishFromDist) {
    _plugins.map((plugin: any[], pluginIndex: string | number) => {
      const pluginName = plugin[0]
      pluginsOverride.map((pluginOverride) => {
        pluginName === pluginOverride[0]
          ? (_plugins[pluginIndex] = pluginOverride)
          : null
      })
    })
  }

  return _plugins
}

export default getPluginsNpmPublishFromDist
