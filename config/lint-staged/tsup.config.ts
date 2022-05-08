// import isCI from 'is-ci'
import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/*.ts']
const format = ['esm']

const config = {
  ..._config,
  dts: false,
  format,
  entry,
}

export default defineConfig({
  ...config,
})
