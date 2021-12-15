import gitmoji from '@jeromefitz/git-cz/gitmoji'
import config from '@jeromefitz/semantic/changelog'

console.dir(gitmoji)

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
