import type { Options } from 'tsdown'

import { defineConfig } from 'tsdown'

const config: Options = {
  dts: true,
  external: [],
  minify: true,
  noExternal: [],
  onSuccess: 'pnpm run copy',
  outDir: 'dist',
  silent: true,
  sourcemap: false,
  target: ['node24'],
  treeshake: false,
}

export { config }
export default defineConfig({ ...config })
