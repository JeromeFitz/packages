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

module.exports = {
  branch,
  format,
  issuesPrefix: '',
  maxMessageLength: 75,
  minMessageLength: 5,
  questions,
  scopes,
  theme,
}
