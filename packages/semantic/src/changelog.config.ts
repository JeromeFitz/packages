import { config as releaseConfig } from '@jeromefitz/git-cz'

const commit = {
  ...releaseConfig.commit,
  maxMessageLength: 75,
  questions: [
    'commitScopes',
    'commitTypes',
    'commitSubject',
    'commitBodyFlag',
    'commitBody',
  ],
  scopes: [],
}

const branch = {
  ...releaseConfig.branch,
}

const changelog = { ...releaseConfig, branch, commit }

export default changelog
