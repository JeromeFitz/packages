import conventionalChangelog from './changelog'
import type { ICommit, IReleaseRuleProps, IReleaseRule } from './types'
import getGitmojiConventional from './utils/getGitmojiConventional'
import getReleaseRules from './utils/getReleaseRules'
import getTypeSpecs from './utils/getTypeSpecs'

const { parserOpts, writerOpts } = conventionalChangelog
const types = getGitmojiConventional()
const releaseRules = getReleaseRules(types)
const typeSpecs = getTypeSpecs(types)

export type { ICommit, IReleaseRuleProps, IReleaseRule }
export { releaseRules, typeSpecs, types, parserOpts, writerOpts }
export default conventionalChangelog
