/** biome-ignore-all lint/suspicious/noConsole: migrate */
import { writeFile } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { default as getGitmojiConventional } from '../dist/utils/getGitmojiConventional.mjs'
import { default as getTypeSpecs } from '../dist/utils/getTypeSpecs.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDirectory = join(__dirname, '..', 'src/types')

const commit = resolve(dataDirectory, 'commit.ts')
const commitType = resolve(dataDirectory, 'commit.types.ts')

const types = getGitmojiConventional()
const typeSpecs = getTypeSpecs(types)

const generateCommitType = () => {
  const t = typeSpecs.map((typeSpec) => `'${typeSpec.type}'`).join(' | ')

  const data = `type ICommit = ${t}

 export type { ICommit }
   `

  writeFile(commitType, data, (err) => {
    if (err) {
      throw err
    }
    console.log('❤️  2. generateCommitType > ./src/types/commit.types.ts')
  })
}

const generateCommit = () => {
  const t = typeSpecs.map((typeSpec) => `'${typeSpec.type}'`).join(', ')

  const data = `import type { ICommit } from './commit.types.js'

const commit: ICommit[] = [${t}]

export { commit }
`

  writeFile(commit, data, (err) => {
    if (err) {
      throw err
    }
    console.log('❤️  2. generateCommit > ./src/types/commit.ts')
  })
}

const init = () => {
  generateCommit()
  generateCommitType()
}

void init()
