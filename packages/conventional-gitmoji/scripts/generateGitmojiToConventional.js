/* eslint-disable import/order */
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'path'

import _find from 'lodash-es/find.js'
import stringify from 'fast-json-stable-stringify'
import title from 'title'
// @todo(node) json import
// import gitmojis from 'gitmojis

import rewrites from '../data/rewrites.js'
import _types from '../data/types.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDirectory = join(
  __dirname,
  '..',

  'node_modules',
  'gitmojis',
  'src',
  'data'
)
const dataFilename = resolve(dataDirectory, 'gitmojis.json')
const gitmojis = JSON.parse(await fs.readFile(dataFilename, 'utf-8'))

const dataSrcDirectory = join(__dirname, '..', 'src')
const fileSrcReleaseRules = resolve(dataSrcDirectory, 'releaseRules.cjs')
const fileSrcTypes = resolve(dataSrcDirectory, 'types.cjs')
const fileSrcTypeSpecs = resolve(dataSrcDirectory, 'typeSpecs.cjs')

const gitmoji = () => {
  gitmojis.gitmojis.map((item) => {
    const rewrite = _find(rewrites, { from: item.name })

    if (!!rewrite) {
      const releaseNotes =
        rewrite.releaseNotes === undefined ? true : rewrite.releaseNotes || false

      _types[rewrite.to] = {
        branch: Boolean(rewrite?.branch) ? rewrite.branch : false,
        code: item.code,
        commit: rewrite.to,
        description: item.description,
        emoji: item.emoji,
        entity: item.entity,
        name: item.name,
        releaseNotes,
        section: item.description,
        semver: item.semver || null,
      }
    } else {
      // @todo(github) create issue via `@jeromefitz/scripts
      console.dir(`@todo(gitmoji) rewrite: ${item.name}`)
    }
  })

  const _data = Object.keys(_types)
    .sort()
    .reduce((type, key) => {
      type[key] = _types[key]

      return type
    }, {})

  return _data
}

const releaseRules = []
const typeSpecs = []

const generateReleaseRules = async () => {
  const filename = fileSrcReleaseRules
  const data = `const releaseRules = ${stringify(releaseRules)}

// export default releaseRules
module.exports = releaseRules
  `

  fs.writeFile(filename, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log(`❤️  generateReleaseRules > ${filename}`)
  })
}

const generateTypes = async () => {
  const types = Object.keys(_types)
    .sort()
    .reduce((type, key) => {
      type[key] = _types[key]

      return type
    }, {})

  const filename = fileSrcTypes
  const data = `const types = ${stringify(types)}

// export default types
module.exports = types
  `

  fs.writeFile(filename, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log(`❤️ generateTypes > ${filename}`)
  })
}

const generateTypeSpecs = () => {
  const filename = fileSrcTypeSpecs
  const data = `const typeSpecs = ${stringify(typeSpecs)}

// export default typeSpecs
module.exports = typeSpecs
  `

  fs.writeFile(filename, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log(`❤️ generateTypeSpecs > ${filename}`)
  })
}

const init = () => {
  gitmoji()
  Object.keys(_types).map((type, _index) => {
    typeSpecs.push({
      code: _types[type].code,
      emoji: _types[type].emoji,
      releaseNotes: _types[type].releaseNotes || false,
      section: title(_types[type].commit) + '\n#### ' + _types[type].section,
      semver: _types[type].semver,
      type: _types[type].commit,
      value: _types[type].commit,
    })
    /**
     * @note Need to cover (code|commit|emoji) for semver based on repo choice
     */

    releaseRules.push({
      release: _types[type].semver,
      // @hack(semantic-release) is turning in commit.type
      //       :arrow_up: => :arrow_up
      //       accounting for that here "fixes"
      type: _types[type].code.replace(/(:[^:]*):/g, '$1'),
    })
    releaseRules.push({
      release: _types[type].semver,
      type: _types[type].commit,
    })
    releaseRules.push({
      release: _types[type].semver,
      type: _types[type].emoji,
    })

    return true
  })
  generateReleaseRules()
  generateTypes()
  generateTypeSpecs()
}

void init()
