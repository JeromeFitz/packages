// @todo(dynamic) eh, make this a bit more dynamic heh
const pluginsOverride = [
  [
    '@semantic-release/npm',
    {
      npmPublish: false,
    },
  ],
  [
    '@semantic-release/github',
    { labels: false, releasedLabels: false, successComment: false },
  ],
]

// @todo(types)
const getPluginsNonPublished = (plugins: any, flgPublished = false) => {
  const _plugins = plugins

  /**
   * @refactor(mutation)
   */
  if (!flgPublished) {
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

export default getPluginsNonPublished
