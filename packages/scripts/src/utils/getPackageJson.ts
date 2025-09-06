import fs from 'node:fs'

const pkg = JSON.parse(fs.readFileSync('../../package.json', 'utf8'))
const { version } = pkg

export { version }
