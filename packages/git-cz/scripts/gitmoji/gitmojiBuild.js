const fs = require('fs')
const path = require('path')

const gitmojiRewrite = require('./gitmojiRewrite')

const dataDirectory = path.join(__dirname, '..', '..', 'data', 'gitmoji')
const dataFilename = path.resolve(dataDirectory, 'index.json')

const gitmojiBuild = async () => {
  const data = await JSON.stringify(gitmojiRewrite)

  fs.writeFile(dataFilename, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('💛️  2. gitmojiBuild > ./data/gitmoji/index.json')
  })
}

gitmojiBuild()

module.exports = gitmojiBuild
