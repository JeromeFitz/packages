const fs = require('fs')
const path = require('path')

const stringify = require('fast-json-stable-stringify')

const { types } = require('../../data/gitmoji/index.json')

const branch = {
  format: '{branchType}{branchName}',
  prefix: '',
  questions: ['branchFlag', 'branchTypes', 'branchName'],
  url: '',
}
const commit = {
  after: {
    emoji: '  ',
    branchName: ' ',
    scope: ') ',
  },
  before: {
    emoji: '',
    branchName: '',
    scope: '(',
  },
  format: '{emoji}{scope}{branchName}{subject}',
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'branchFlag',
    'commitBreakingFlag',
    'commitBreaking',
    'commitScopes',
    'commitTypes',
    'commitSubject',
    'commitBodyFlag',
    'commitBody',
  ],
  scopes: [],
}

const theme = {
  branch,
  commit,
  enabled: true,
  types,
}

const dataDirectory = path.join(__dirname, '..', '..', 'src', 'themes')
const dataFilename = path.resolve(dataDirectory, 'gitmoji.ts')

const gitmojiTheme = () => {
  const data = `const gitmoji = ${stringify(theme)}

  export default gitmoji
  `

  fs.writeFile(dataFilename, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('❤️  3. gitmojiTheme > ./src/themes/gitmoji.ts')
  })
}

gitmojiTheme()

module.exports = gitmojiTheme
