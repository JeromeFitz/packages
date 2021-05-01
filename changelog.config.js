const changelog = require('./packages/semantic/src/changelog.config.js')

const branch = {
  ticketUrl: 'https://github.com/JeromeFitz/packages/issues/',
}
const questions = ['breaking', 'scope', 'lerna', 'type', 'subject', 'body']
const scopes = ['', 'codestyle', 'packages', 'semantic']

module.exports = {
  ...changelog,
  branch: { ...changelog.branch, ...branch },
  questions,
  scopes,
}
