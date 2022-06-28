// import isCI from 'is-ci'
import { defineConfig } from 'tsup'
import type { Format, Options } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/*.ts']
const format: Format[] = ['esm']

const config: Options = {
  ..._config,
  dts: false,
  format,
  entry,
}

export default defineConfig({
  ...config,
})
