// import isCI from 'is-ci'
import type { Format, Options } from 'tsup'

import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config.js'

const entry = ['src/*.ts']
const format: Format[] = ['esm']

const config: Options = {
  ..._config,
  dts: false,
  entry,
  format,
}

export default defineConfig({
  ...config,
})
