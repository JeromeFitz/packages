// import isCI from 'is-ci'
import { defineConfig } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/lint-staged.config.js']

const config = {
  ..._config,
  entry,
}

export default defineConfig({
  ...config,
})
