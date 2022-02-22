// import isCI from 'is-ci'
import { defineConfig, Options } from 'tsup'

import { config as _config } from '../../tsup.config'

const entry = ['src/*']
const config: Options = {
  ..._config,
  entry,
  external: ['@jeromefitz/git-cz'],
  // format: ['esm'],
  // noExternal: ['@jeromefitz/conventional-gitmoji', '@jeromefitz/release-notes'],
  noExternal: ['@jeromefitz/release-notes'],
}

export default defineConfig({
  ...config,
})
