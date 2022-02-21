import type { Release } from 'semantic-release'

import type { CommitTypes } from '../types'

interface ReleaseRule {
  type: CommitTypes
  release: Release['type']
}

export type { ReleaseRule }
