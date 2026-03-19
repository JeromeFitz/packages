import type { Options } from 'semantic-release'

import { getConfig } from './getConfig'
import { getPluginOptions } from './plugins/index'

const plugins: Options = getPluginOptions()
const config = getConfig()

export { config, getConfig, getPluginOptions, plugins }
