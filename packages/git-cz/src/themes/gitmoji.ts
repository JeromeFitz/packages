import { types } from '@jeromefitz/conventional-gitmoji'
import type { TypesProps } from '@jeromefitz/conventional-gitmoji'

type BranchProps = {
  format: string
  prefix: string
  questions: string[]
  url: string
}

type CommitABProps = {
  branchName: string
  emoji: string
  scope: string
}

type CommitProps = {
  after: CommitABProps
  before: CommitABProps
  format: string
  maxMessageLength: number
  minMessageLength: number
  questions: string[]
  scopes: string[]
}

type GitmojiProps = {
  branch: BranchProps
  commit: CommitProps
  enabled: boolean
  types: TypesProps
}

const gitmoji: GitmojiProps = {
  branch: {
    format: '{branchType}{branchName}',
    prefix: '',
    questions: ['branchFlag', 'branchTypes', 'branchName'],
    url: '',
  },
  commit: {
    after: { branchName: ' ', emoji: '  ', scope: ') ' },
    before: { branchName: '', emoji: '', scope: '(' },
    format: '{emoji}{scope}{branchName}{subject}',
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: [
      'branchFlag',
      'commitBreakingFlag',
      'commitBreaking',
      'commitScopes',
      'commitTypes',
      'commitSubject',
      'commitBodyFlag',
      'commitBody',
    ],
    scopes: [],
  },
  enabled: true,
  types,
}

export default gitmoji
