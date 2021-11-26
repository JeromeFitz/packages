import config from './packages/semantic/src/changelog.config.js'

const commit = {
  ...config.commit,
  questions: [
    'commitBreakingFlag',
    'commitBreaking',
    'commitScopes',
    'commitTypes',
    'commitSubject',
    'commitBodyFlag',
    'commitBody',
  ],
  scopes: ['', 'codestyle', 'git-cz', 'packages', 'scripts', 'semantic'],
}

const branch = {
  ...config.branch,
  url: 'https://github.com/JeromeFitz/packages/issues/',
}

const changelog = { ...config, branch, commit }

export default changelog
