import { join } from 'path'

import multirelease from 'multi-semantic-release'

const packageDir = join(process.cwd(), 'packages')

const notes = multirelease([
  `${packageDir}/codestyle/package.json`,
  `${packageDir}/scripts/package.json`,
  `${packageDir}/semantic/package.json`,
])

export default notes
