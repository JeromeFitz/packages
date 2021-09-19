const fs = require('fs')
const path = require('path')

const stringify = require('fast-json-stable-stringify')
const fetch = require('isomorphic-unfetch')

const gitmojiUrl =
  'https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json'

const dataDirectory = path.join(__dirname, '..', '..', 'data', 'gitmoji')
const dataFilename = path.resolve(dataDirectory, 'init.json')

const gitmojiFetch = async () => {
  const response = await fetch(gitmojiUrl)
  const json = await response.json()
  const data = await stringify(json)

  fs.writeFile(dataFilename, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('💚️  1. gitmojiFetch > ./data/gitmoji/init.json')
  })
}

gitmojiFetch()

module.exports = gitmojiFetch
