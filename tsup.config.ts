/**
 * @ref(tsup) https://tsup.egoist.dev/
 *
 */
import type { Options } from 'tsup'

import { defineConfig } from 'tsup'

const config: Options = {
  clean: true,
  dts: true,
  external: [],
  format: ['esm'],
  minify: true,
  noExternal: [],
  onSuccess: 'pnpm run copy',
  outDir: 'dist',
  silent: true,
  sourcemap: false,
  splitting: false,
  target: ['node22'],
  treeshake: false,
}

export { config }
export default defineConfig({ ...config })
