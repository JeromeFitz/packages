import conventionalChangelog from './changelog/index.js'
import type { ICommit, IReleaseRuleProps, IReleaseRule } from './types/index.js'
import getGitmojiConventional from './utils/getGitmojiConventional.js'
import getReleaseRules from './utils/getReleaseRules.js'
import getTypeSpecs from './utils/getTypeSpecs.js'

const { parserOpts, writerOpts } = conventionalChangelog
const types = getGitmojiConventional()
const releaseRules = getReleaseRules(types)
const typeSpecs = getTypeSpecs(types)

export type { ICommit, IReleaseRuleProps, IReleaseRule }
export { releaseRules, typeSpecs, types, parserOpts, writerOpts }
export default () => conventionalChangelog
