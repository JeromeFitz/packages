const config = require('./packages/semantic/src/changelog.config.js')

const commit = {
  ...config.commit,
  questions: [
    'commitScopes',
    'commitTypes',
    'commitSubject',
    'commitBodyFlag',
    'commitBody',
  ],
  scopes: ['', 'codestyle', 'packages', 'semantic'],
}

const branch = {
  ...config.branch,
  url: 'https://github.com/JeromeFitz/packages/issues/',
}

const changelog = { ...config, branch, commit }

module.exports = changelog
