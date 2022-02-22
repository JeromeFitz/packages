import type { CommitTypes } from '@jeromefitz/conventional-gitmoji'
import type { Release } from 'semantic-release'

interface ReleaseRule {
  type: CommitTypes
  release: Release['type']
}

export type { ReleaseRule }
