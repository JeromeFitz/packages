/* eslint-disable import/order */
import { writeFile } from 'fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'path'

import stringify from 'fast-json-stable-stringify'
import fetch from 'isomorphic-unfetch'

const __dirname = dirname(fileURLToPath(import.meta.url))
/**
 * @todo(api) https://gitmoji.dev/api/gitmojis
 */
const gitmojiUrl =
  'https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json'

const dataDirectory = join(__dirname, '..', '..', 'data', 'gitmoji')
const dataFilename = resolve(dataDirectory, 'init.json')

const gitmojiFetch = async () => {
  const response = await fetch(gitmojiUrl)
  const json = await response.json()
  const data = stringify(json)

  writeFile(dataFilename, data, (err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('💚️  1. gitmojiFetch > ./data/gitmoji/init.json')
  })

  return json
}

// void gitmojiFetch()

export default gitmojiFetch
