import type { Options } from 'tsdown'

import { defineConfig } from 'tsdown'

import { config as _config } from '../../tsdown.config.ts'

const entry = ['src/*.ts']

const config: Options = {
  ..._config,
  dts: false,
  entry,
}

export default defineConfig({
  ...config,
})
