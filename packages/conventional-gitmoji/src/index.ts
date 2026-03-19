import type { ICommit, IReleaseRule, IReleaseRuleProps } from './types/index'

import conventionalChangelog from './changelog/index'
import getGitmojiConventional from './utils/getGitmojiConventional'
import getReleaseRules from './utils/getReleaseRules'
import getTypeSpecs from './utils/getTypeSpecs'

const { parserOpts, writerOpts } = conventionalChangelog
const types = getGitmojiConventional()
const releaseRules = getReleaseRules(types)
const typeSpecs = getTypeSpecs(types)

export type { ICommit, IReleaseRule, IReleaseRuleProps }
export { parserOpts, releaseRules, typeSpecs, types, writerOpts }
export default () => conventionalChangelog
