// import isCI from 'is-ci'
import { defineConfig, Options } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/**']
const config: Options = {
  ..._config,
  entry,
  external: [],
  noExternal: ['@jeromefitz/conventional-gitmoji', 'gitmojis'],
}

export default defineConfig({
  ...config,
})
