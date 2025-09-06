import type { Options } from 'tsdown'

import { defineConfig } from 'tsdown'

import { config as _config } from '../../tsdown.config.ts'

const entry = ['src/index.ts']
const config: Options = {
  ..._config,
  dts: false,
  entry,
  treeshake: true,
}

export default defineConfig({
  ...config,
})
