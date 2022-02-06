import getGitmojiConventional from './getGitmojiConventional'
import getReleaseRules from './getReleaseRules'
import getTypeSpecs from './getTypeSpecs'

interface TypesProps {
  [x: string]: {
    branch: string | boolean | null | undefined
    code: any | null
    commit: any
    description: string
    emoji: string
    entity: string
    name: string
    semver: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  }
}

const types: TypesProps = getGitmojiConventional()
const releaseRules = getReleaseRules(types)
const typeSpecs = getTypeSpecs(types)

export type { TypesProps }
export { releaseRules, typeSpecs, types }
export default getGitmojiConventional
