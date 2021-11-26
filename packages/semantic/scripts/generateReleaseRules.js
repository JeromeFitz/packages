/* eslint-disable import/order */
import { writeFile } from 'fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'path'

import stringify from 'fast-json-stable-stringify'
import title from 'title'

import config from '../../git-cz/dist/themes/gitmoji.js'

const { types } = config
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDirectory = join(__dirname, '..', 'src')
const fileReleaseRules = resolve(dataDirectory, 'releaseRules.js')
const fileTypeSpecs = resolve(dataDirectory, 'typeSpecs.js')

const releaseRules = []
const typeSpecs = []

Object.keys(types).map((type, _index) => {
  typeSpecs.push({
    code: types[type].code,
    emoji: types[type].emoji,
    releaseNotes: types[type].releaseNotes || false,
    section: title(types[type].commit) + '\n#### ' + types[type].section,
    semver: types[type].semver,
    type: types[type].commit,
    value: types[type].commit,
  })
  /**
   * @note Need to cover (code|commit|emoji) for semver based on repo choice
   */

  releaseRules.push({
    release: types[type].semver,
    // @hack(semantic-release) is turning in commit.type
    //       :arrow_up: => :arrow_up
    //       accounting for that here "fixes"
    type: types[type].code.replace(/(:[^:]*):/g, '$1'),
  })
  releaseRules.push({
    release: types[type].semver,
    type: types[type].commit,
  })
  releaseRules.push({
    release: types[type].semver,
    type: types[type].emoji,
  })

  return true
})

const generateReleaseRules = () => {
  const data = `const releaseRules = ${stringify(releaseRules)}

// export default releaseRules
module.exports = releaseRules
  `

  writeFile(fileReleaseRules, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('❤️  1. generateReleaseRules > ./src/releaseRules.js')
  })
}

const generateTypeSpecs = () => {
  const data = `const typeSpecs = ${stringify(typeSpecs)}

// export default typeSpecs
module.exports = typeSpecs
  `

  writeFile(fileTypeSpecs, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('❤️  2. generateTypeSpecs > ./src/typeSpecs.js')
  })
}

// void generateReleaseRules()
// void generateTypeSpecs()

const init = () => {
  generateReleaseRules()
  generateTypeSpecs()
}

void init()
