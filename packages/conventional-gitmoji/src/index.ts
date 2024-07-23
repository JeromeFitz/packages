import type { ICommit, IReleaseRule, IReleaseRuleProps } from './types/index.js'

import conventionalChangelog from './changelog/index.js'
import getGitmojiConventional from './utils/getGitmojiConventional.js'
import getReleaseRules from './utils/getReleaseRules.js'
import getTypeSpecs from './utils/getTypeSpecs.js'

const { parserOpts, writerOpts } = conventionalChangelog
const types = getGitmojiConventional()
const releaseRules = getReleaseRules(types)
const typeSpecs = getTypeSpecs(types)

export type { ICommit, IReleaseRule, IReleaseRuleProps }
export { parserOpts, releaseRules, types, typeSpecs, writerOpts }
export default () => conventionalChangelog
