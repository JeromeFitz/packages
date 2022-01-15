import { defineConfig } from 'tsup'

export default defineConfig({
  clean: false,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  minify: true,
  outDir: 'dist',
  sourcemap: false,
  splitting: false,
  target: ['node14'],
})
