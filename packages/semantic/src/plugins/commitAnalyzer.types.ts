import type { ICommit } from '@jeromefitz/conventional-gitmoji'
import type { Release } from 'semantic-release'

interface ReleaseRule {
  type: ICommit
  release: Release['type']
}

export type { ReleaseRule }
