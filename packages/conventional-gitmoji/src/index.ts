import type { Options } from 'semantic-release'

import { getPluginOptions } from './plugins'
import type { ReleaseRuleProps, ReleaseRuleTypes } from './types'
import getGitmojiConventional from './utils/getGitmojiConventional'
import getReleaseRules from './utils/getReleaseRules'
import getTypeSpecs from './utils/getTypeSpecs'

const defaultConfig: Options = getPluginOptions()
const types: ReleaseRuleTypes = getGitmojiConventional()
const releaseRules = getReleaseRules(types)
const typeSpecs = getTypeSpecs(types)

export type { ReleaseRuleProps, ReleaseRuleTypes }
export { defaultConfig, getPluginOptions, releaseRules, typeSpecs, types }
export default getGitmojiConventional
