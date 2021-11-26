import fs from 'fs'
import { createRequire } from 'module'
import path from 'path'

import chalkPipe from 'chalk-pipe'

import configDefault from '../themes/gitmoji.js'

const configFiles = [
  '.git-cz.json',
  'changelog.config.cjs',
  'changelog.config.js',
  'changelog.config.mjs',
  'changelog.config.json',
]

const packageFile = ['package.json']

const findOverrides = (root, files) => {
  const dir = root || process.cwd()

  for (const file of files) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const filename = path.resolve(dir, file)

    if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
      // eslint-disable-next-line import/no-dynamic-require
      return createRequire(filename)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const parent = path.resolve(dir, '..')

  if (parent !== dir) {
    return findOverrides(parent, files)
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const pkgFilename = path.join(dir, 'package.json')

  if (fs.existsSync(pkgFilename)) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-dynamic-require
      const changelog = require(pkgFilename).config.commitizen.changelog
      // const changelog = createRequire(pkgFilename)

      if (changelog) {
        return changelog
      }
    } catch (error) {}
  }

  return {}
}

const getConfig = (root) => {
  const overrides = findOverrides(root, configFiles)

  if (typeof overrides !== 'function') {
    // eslint-disable-next-line no-console
    console.log(chalkPipe('red.bold')('Expected changelog config to be a function.'))
    console.dir(typeof overrides)
    process.exit(1)
  }

  const config = {
    ...configDefault,
    ...overrides,
  }

  return config
}

const getPackage = (root) => {
  const overrides = findOverrides(root, packageFile)

  return { ...overrides }
}

export { getConfig, getPackage }
