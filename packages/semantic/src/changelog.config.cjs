const config = require('../../git-cz/dist/themes/gitmoji').default

const commit = {
  ...config.commit,
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
  ...config.branch,
}

const changelog = { ...config, branch, commit }

module.exports = changelog
