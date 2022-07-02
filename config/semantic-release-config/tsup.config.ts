// import isCI from 'is-ci'
import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/*.ts']

const config: Options = {
  ..._config,
  dts: false,
  format: ['cjs'],
  minify: false,
  entry,
}

export default defineConfig({
  ...config,
})
