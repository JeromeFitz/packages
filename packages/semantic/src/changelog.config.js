const config = require('@jeromefitz/git-cz/dist/themes/gitmoji').default

const commit = {
  ...config.commit,
  questions: [
    'commitScopes',
    'commitTypes',
    'commitSubject',
    'commitBodyFlag',
    'commitBody',
  ],
  scopes: ['', 'codestyle', 'packages', 'release', 'semantic'],
}

const branch = {
  ...config.branch,
  prefix: 'ABC-',
  url: 'https://jeromefitzgerald.com?issue=',
}

const changelog = { ...config, branch, commit }

module.exports = changelog
