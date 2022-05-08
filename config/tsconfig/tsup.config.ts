// import isCI from 'is-ci'
import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/zzz.ts']

const config = {
  ..._config,
  dts: false,
  entry,
}

export default defineConfig({
  ...config,
})
