import conventionalChangelog from './changelog'
import type { CommitTypes, ReleaseRuleProps, ReleaseRuleTypes } from './types'
import getGitmojiConventional from './utils/getGitmojiConventional'
import getReleaseRules from './utils/getReleaseRules'
import getTypeSpecs from './utils/getTypeSpecs'

const { parserOpts, writerOpts } = conventionalChangelog
const types: ReleaseRuleTypes = getGitmojiConventional()
const releaseRules = getReleaseRules(types)
const typeSpecs = getTypeSpecs(types)

export type { CommitTypes, ReleaseRuleProps, ReleaseRuleTypes }
export { releaseRules, typeSpecs, types, parserOpts, writerOpts }
export default conventionalChangelog
