const changelog = require('./packages/semantic/src/changelog.config.js')

const format = '{emoji}{scope} {branchName}{subject}'
// const questions = ['branchPrefix', 'breaking', 'type', 'subject', 'body']
const questions = ['breaking', 'scope', 'lerna', 'type', 'subject', 'body']
const scopes = ['', 'codestyle', 'packages', 'semantic']
const theme = 'gitmoji'
const branch = {
  format: '{branchType}{branchName}',
  projectCode: '',
  questions: ['branchName', 'branchPrefix', 'branchType'],
  ticketUrl: 'https://github.com/JeromeFitz/packages/issues/',
}

module.exports = { ...changelog, branch, format, questions, scopes, theme }
