/* eslint-disable import/order */
import { writeFile } from 'fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'path'

import stringify from 'fast-json-stable-stringify'

import gitmojiRewrite from './gitmojiRewrite.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const dataDirectory = join(__dirname, '..', '..', 'data', 'gitmoji')
const dataFilename = resolve(dataDirectory, 'index.json')

const gitmojiBuild = async (items) => {
  const _data = await gitmojiRewrite(items)
  const data = stringify(_data)

  writeFile(dataFilename, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('💛️  2. gitmojiBuild > ./data/gitmoji/index.json')
  })

  return _data
}

// void gitmojiBuild()

export default gitmojiBuild
