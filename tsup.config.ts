/**
 * @ref(tsup) https://tsup.egoist.sh
 *
 */
import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

const config: Options = {
  clean: false,
  dts: true,
  external: [],
  format: ['esm', 'cjs'],
  minify: true,
  noExternal: [],
  onSuccess: 'pnpm run copy',
  outDir: 'dist',
  silent: true,
  sourcemap: false,
  splitting: false,
  treeshake: false,
  target: ['node16'],
}

export { config }
export default defineConfig({ ...config })
