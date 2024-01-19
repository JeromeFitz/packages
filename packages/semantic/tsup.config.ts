// import isCI from 'is-ci'
import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

import { config as _config } from '../../tsup.config.js'

const entry = ['src/*']
const config: Options = {
  ..._config,
  entry,
}

export default defineConfig({
  ...config,
})
