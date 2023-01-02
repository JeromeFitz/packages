// import isCI from 'is-ci'
import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/**']
const config: Options = {
  ..._config,
  clean: true,
  dts: false,
  entry,
  format: ['esm'],
  splitting: true,
  treeshake: true,
}

export default defineConfig({
  ...config,
})
