const path = require('path')

const multirelease = require('multi-semantic-release')

const packageDir = path.join(process.cwd(), 'packages')

const notes = multirelease([
  `${packageDir}/codestyle/package.json`,
  `${packageDir}/scripts/package.json`,
  `${packageDir}/semantic/package.json`,
])

console.dir(notes)
