import { types } from '@jeromefitz/conventional-gitmoji'

const gitmoji = {
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
