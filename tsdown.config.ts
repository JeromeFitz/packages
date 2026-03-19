import type { UserConfig } from 'tsdown'

import { defineConfig } from 'tsdown'

const config: UserConfig = {
  dts: true,
  exports: true,
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
