/** biome-ignore-all lint/suspicious/noConsole: migrate */
import { writeFile } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// import stringify from 'fast-json-stable-stringify'

// import title from 'title'

import { default as getGitmojiConventional } from '../dist/utils/getGitmojiConventional.js'
import { default as getTypeSpecs } from '../dist/utils/getTypeSpecs.js'

// import { default as getReleaseRules } from '../dist/utils/getReleaseRules.js'

// const { types } = config
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDirectory = join(__dirname, '..', 'src/types')

// const fileReleaseRules = resolve(dataDirectory, 'releaseRules.ts')
// const fileTypeSpecs = resolve(dataDirectory, 'typeSpecs.ts')

const commit = resolve(dataDirectory, 'commit.ts')
const commitType = resolve(dataDirectory, 'commit.types.ts')

// const releaseRules = []
// const typeSpecs = []

// console.dir(`> getGitmojiConventional`)
// console.dir(getGitmojiConventional())
// console.dir(`> getReleaseRules`)
// console.dir(getReleaseRules)
// console.dir(`> getTypeSpecs`)
// console.dir(getTypeSpecs)

const types = getGitmojiConventional()
// const releaseRules = getReleaseRules(types)
const typeSpecs = getTypeSpecs(types)

// // Object.keys(types).map((type, _index) => {
// //   typeSpecs.push({
// //     code: types[type].code,
// //     emoji: types[type].emoji,
// //     releaseNotes: types[type].releaseNotes || false,
// //     section: title(types[type].commit) + '\n#### ' + types[type].section,
// //     semver: types[type].semver,
// //     type: types[type].commit,
// //     value: types[type].commit,
// //   })
// //   /**
// //    * @note Need to cover (code|commit|emoji) for semver based on repo choice
// //    */

// //   releaseRules.push({
// //     release: types[type].semver,
// //     // @hack(semantic-release) is turning in commit.type
// //     //       :arrow_up: => :arrow_up
// //     //       accounting for that here "fixes"
// //     type: types[type].code.replace(/(:[^:]*):/g, '$1'),
// //   })
// //   releaseRules.push({
// //     release: types[type].semver,
// //     type: types[type].commit,
// //   })
// //   releaseRules.push({
// //     release: types[type].semver,
// //     type: types[type].emoji,
// //   })

// //   return true
// // })

// const generateReleaseRules = () => {
//   const data = `const releaseRules = ${stringify(releaseRules)}
//  export default releaseRules
//    `

//   writeFile(fileReleaseRules, data, (err) => {
//     if (err) {
//       throw err
//     }
//
//     console.log('❤️  1. generateReleaseRules > ./src/releaseRules.ts')
//   })
// }

// const generateTypeSpecs = () => {
//   const data = `const typeSpecs = ${stringify(typeSpecs)}
//  export default typeSpecs
//    `

//   writeFile(fileTypeSpecs, data, (err) => {
//     if (err) {
//       throw err
//     }
//
//     console.log('❤️  2. generateTypeSpecs > ./src/typeSpecs.ts')
//   })
// }

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

// void generateReleaseRules()
// void generateTypeSpecs()

const init = () => {
  // generateReleaseRules()
  // generateTypeSpecs()
  generateCommit()
  generateCommitType()
}

void init()
