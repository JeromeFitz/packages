/* eslint-disable import/order */
import { writeFile } from 'fs'
// import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'path'

import stringify from 'fast-json-stable-stringify'

// const { types } = JSON.parse(await fs.readFile('../../data/gitmoji/index.json'));

const __dirname = dirname(fileURLToPath(import.meta.url))

// const dataDirectory2 = join(__dirname,  '..', '..', 'data', 'gitmoji')
// const dataFilename2 = resolve(dataDirectory2, 'index.json')
// const types = JSON.parse(await fs.readFile(dataFilename2));

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

const dataDirectory = join(__dirname, '..', '..', 'src', 'themes')
const dataFilename = resolve(dataDirectory, 'gitmoji.ts')

const gitmojiTheme = (types) => {
  const theme = {
    branch,
    commit,
    enabled: true,
    types,
  }

  const data = `const gitmoji = ${stringify(theme)}

export default gitmoji
  `

  writeFile(dataFilename, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('💙️  3. gitmojiTheme > ./src/themes/gitmoji.ts')
  })
}

// void gitmojiTheme()

export default gitmojiTheme
