// import isCI from 'is-ci'
import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config'

import pkg from './package.json'

const entry = [
  'src/components/index.ts',
  'src/components/Hero/HeroImage.tsx',
  'src/components/Card/Show.tsx',
  'src/stitches.config.ts',
  // 'src/custom/Toast/index.ts',
]

const external = [
  ...Object.keys(pkg.dependencies || {}),
  // @note(tsup) These should not be imported in the first place
  // ...Object.keys(pkg.devDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

const config = {
  ..._config,
  entry,
  external,
  minify: false,
  splitting: false,
  tsconfig: 'tsconfig.json',
}

export default defineConfig({
  ...config,
})
