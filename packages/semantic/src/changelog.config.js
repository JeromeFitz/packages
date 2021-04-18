// const gitmojis = require('@jeromefitz/git-cz/data/gitmoji/index.json')

const format = '{emoji}{scope} {branchName}{subject}'
const questions = ['branchPrefix', 'breaking', 'type', 'scope', 'subject', 'body']
const scopes = ['', 'codestyle', 'release', 'semantic']
const theme = 'gitmoji'
const branch = {
  format: '{branchType}{branchName}',
  projectCode: 'ABC-',
  questions: ['branchName', 'branchPrefix', 'branchType'],
  ticketUrl: 'https://jeromefitzgerald.com?issue=',
}
// const tempTypes = gitmojis.gitmojiTypes

module.exports = {
  branch,
  format,
  issuesPrefix: '',
  maxMessageLength: 75,
  minMessageLength: 5,
  questions,
  scopes,
  theme,
  // types: tempTypes,
}
