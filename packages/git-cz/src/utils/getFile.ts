import fs from 'fs'
import { createRequire } from 'module'
import path from 'path'

import { createColorize } from 'colorize-template'
import pico from 'picocolors'

const colorize = createColorize(pico)

/**
 * @note(git-cz)
 * The 'import.meta' meta-property is only allowed when
 *  the '--module' option is 'es2020', 'es2022', 'esnext',
 *  'system', 'node12', or 'nodenext'.ts(1343)
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const _require = createRequire(import.meta.url)

const configFiles = [
  '.git-cz.json',
  'changelog.config.cjs',
  'changelog.config.js',
  'changelog.config.mjs',
  'changelog.config.json',
]

const packageFile = ['package.json']

const loadModule = async (module: string) => {
  if (module.includes('.json')) {
    return _require(module)
  } else {
    const { default: config } = await import(module)
    return config
  }
}

const findOverrides = async (root: string, files: string[]) => {
  const dir = root || process.cwd()

  for (const file of files) {
    const filename = path.resolve(dir, file)

    if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
      return await loadModule(filename)
    }
  }

  const parent = path.resolve(dir, '..')

  if (parent !== dir) {
    return findOverrides(parent, files)
  }

  const pkgFilename = path.join(dir, 'package.json')

  if (fs.existsSync(pkgFilename)) {
    try {
      const changelog = await loadModule(pkgFilename)
      if (changelog) {
        return changelog?.config?.commitizen?.changelog
      }
    } catch (error) {}
  }

  return {}
}

const getConfig = async (root: any) => {
  const overrides = await findOverrides(root, configFiles)

  if (typeof overrides !== 'object') {
    // eslint-disable-next-line no-console
    console.log(colorize`{red.bold Expected changelog config to be a object.}`)
    console.dir(typeof overrides)
    console.dir(overrides)
    process.exit(1)
  }

  return { ...overrides }
}

const getPackage = async (root: string) => {
  const overrides = await findOverrides(root, packageFile)

  return { ...overrides }
}

export { getConfig, getPackage }
