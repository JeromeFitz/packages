import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

const config: Options = {
  clean: false,
  dts: true,
  format: ['esm', 'cjs'],
  minify: true,
  onSuccess: 'yarn copy',
  outDir: 'dist',
  silent: true,
  sourcemap: false,
  splitting: false,
  treeshake: false,
  target: ['node16'],
}

export { config }
export default defineConfig({ ...config })
