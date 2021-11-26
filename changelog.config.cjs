const config = require('./packages/semantic/src/changelog.config.cjs')

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

module.exports = changelog
