// import isCI from 'is-ci'
import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config'

import pkg from './package.json'

/**
 * @note
 * Might be ideal to create each Component as an entry Point
 * Would add script to make each one its own package
 * (Not to NPM, just within itself via `node_modules`)
 *
 * Pretty sure tree-shaking is fine in Next though.
 *
 * POC:
 * - Loop through each folder in: `./components`
 * - Create `package.json` based off of naming convention
 * - Add as tsup entry point => index.ts
 *
 */
const entry = [
  'src/index.ts',
  'src/components/**/index.ts',
  'src/custom/**/index.ts',
  'src/lib/stitches.config.ts',
  'src/lib/globalStyles.ts',
  // 'src/components/Card/Show.tsx',
  // 'src/components/Hero/HeroImage.tsx',
  // 'src/custom/Emoji/index.ts',
  // 'src/custom/Select/index.ts',
  // 'src/custom/Toast/index.ts',
  // 'src/custom/Tooltip/index.ts',
  // 'src/stitches.config.ts',
  // 'src/hooks/*',
  // //
  // 'src/components/**',
  // '!src/components/**/*.md',
]

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

const inject = ['./react-shim.js']

const config = {
  ..._config,
  entry,
  external,
  inject,
  // jsxFactory: 'createElement',
  // jsxFragment: 'Fragment',
  minify: true,
  // silent: false,
  splitting: true,
  target: ['esnext'],
  tsconfig: 'tsconfig.json',
}

export default defineConfig({
  ...config,
})
