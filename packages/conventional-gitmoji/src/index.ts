import getGitmojiConventional from './getGitmojiConventional'
import getReleaseRules from './getReleaseRules'
import getTypeSpecs from './getTypeSpecs'

const types = getGitmojiConventional()
const releaseRules = getReleaseRules(types)
const typeSpecs = getTypeSpecs(types)

export { releaseRules, typeSpecs, types }
export default getGitmojiConventional
