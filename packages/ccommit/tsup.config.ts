// import isCI from 'is-ci'
import type { Options } from 'tsup'

import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config.js'

const entry = ['src/index.ts']
const config: Options = {
  ..._config,
  clean: true,
  dts: false,
  entry,
  splitting: true,
  treeshake: true,
}

export default defineConfig({
  ...config,
})
