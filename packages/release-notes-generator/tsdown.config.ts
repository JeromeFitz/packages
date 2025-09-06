import type { Options } from 'tsdown'

import { defineConfig } from 'tsdown'

import { config as _config } from '../../tsdown.config.ts'

const entry = ['src/*']
const config: Options = {
  ..._config,
  entry,
}

export default defineConfig({
  ...config,
})
