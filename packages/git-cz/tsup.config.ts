// import isCI from 'is-ci'
import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/**']
const config = {
  ..._config,
  entry,
  external: [],
  noExternal: [],
}

export default defineConfig({
  ...config,
})
