import type { UserConfig } from 'tsdown'

import { defineConfig } from 'tsdown'

const config: UserConfig = {
  attw: {
    profile: 'esm-only',
  },
  deps: { alwaysBundle: [], neverBundle: [] },
  dts: true,
  exports: true,
  failOnWarn: true,
  logLevel: 'error',
  minify: true,
  onSuccess: 'pnpm run copy',
  outDir: 'dist',
  publint: true,
  sourcemap: false,
  target: ['node24'],
  treeshake: false,
}

export { config }
export default defineConfig({ ...config })
