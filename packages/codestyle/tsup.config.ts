import { defineConfig } from 'tsup'

export default defineConfig({
  clean: false,
  dts: true,
  entry: ['src/lint-staged.config.js'],
  external: ['react'],
  format: ['esm', 'cjs'],
  minify: true,
  outDir: 'dist',
  sourcemap: false,
  splitting: false,
  target: ['node14'],
})
