import type { Options } from 'semantic-release'

import { getConfig } from './getConfig'
import { getPluginOptions } from './plugins'

const plugins: Options = getPluginOptions()
const config = getConfig()

export { config, plugins, getConfig, getPluginOptions }
