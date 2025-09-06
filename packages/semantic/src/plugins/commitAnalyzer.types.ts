import type { ICommit } from '@jeromefitz/conventional-gitmoji'

import type { Release } from 'semantic-release'

interface ReleaseRule {
  release: Release['type']
  type: ICommit
}

export type { ReleaseRule }
