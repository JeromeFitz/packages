const path = require('path')
const multirelease = require('multi-semantic-release')

const pacakgeDir = path.join(process.cwd(), 'packages')

const notes = multirelease([
  `${pacakgeDir}/codestyle/package.json`,
  `${pacakgeDir}/semantic/package.json`,
])

console.dir(notes)
