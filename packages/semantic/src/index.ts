import type { Options } from 'semantic-release'

import { getConfig } from './getConfig.js'
import { getPluginOptions } from './plugins/index.js'

const plugins: Options = getPluginOptions()
const config = getConfig()

export { config, plugins, getConfig, getPluginOptions }
