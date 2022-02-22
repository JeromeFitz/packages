// import isCI from 'is-ci'
import { defineConfig, Options } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/**', '!src/**/*.hbs']
const config: Options = {
  ..._config,
  entry,
  external: [],
  noExternal: ['gitmojis', 'title'],
}

export default defineConfig({
  ...config,
})
