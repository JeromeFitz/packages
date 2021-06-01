const fs = require('fs')
const path = require('path')

const { types } = require('@jeromefitz/git-cz/dist/themes/gitmoji').default
const title = require('title')

const dataDirectory = path.join(__dirname, '..', 'src')
const fileReleaseRules = path.resolve(dataDirectory, 'releaseRules.js')
const fileTypeSpecs = path.resolve(dataDirectory, 'typeSpecs.js')

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
  const data = `const releaseRules = ${JSON.stringify(releaseRules, null, 4)}

  // export default releaseRules
  module.exports = releaseRules
  `

  fs.writeFile(fileReleaseRules, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('❤️  1. generateReleaseRules > ./src/releaseRules.js')
  })
}

const generateTypeSpecs = () => {
  const data = `const typeSpecs = ${JSON.stringify(typeSpecs, null, 4)}

  // export default typeSpecs
  module.exports = typeSpecs
  `

  fs.writeFile(fileTypeSpecs, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('❤️  2. generateTypeSpecs > ./src/typeSpecs.js')
  })
}

generateReleaseRules()
generateTypeSpecs()

module.exports = generateReleaseRules
