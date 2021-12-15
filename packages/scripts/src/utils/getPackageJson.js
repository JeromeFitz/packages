import fs from 'fs'

const pkg = JSON.parse(fs.readFileSync('../../../package.json', 'utf8'))
const { version } = pkg

export { version }
