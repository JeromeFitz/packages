import type { ICommit } from './commit.types.js'

type IReleaseRule = Partial<Record<ICommit, IReleaseRuleProps>>

// @todo(NICE-129) eslint
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type IReleaseRuleProps = {
  branch: null | string
  code: string
  commit: ICommit
  description: string
  emoji: string
  entity: string
  name: string
  semver: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  // @note(breaking) can we move away from this dupe key currently required in getTypeSpecs?
  type?: ICommit
  value?: ICommit
}
export type { IReleaseRule, IReleaseRuleProps }
