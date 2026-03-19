import type { UserConfig } from 'tsdown'

import { defineConfig } from 'tsdown'

const config: UserConfig = {
  attw: 'ci-only',
  deps: { alwaysBundle: [], neverBundle: [] },
  dts: true,
  exports: true,
  failOnWarn: 'ci-only',
  logLevel: 'error',
  minify: true,
  onSuccess: 'pnpm run copy',
  outDir: 'dist',
  publint: 'ci-only',
  sourcemap: false,
  target: ['node24'],
  treeshake: false,
}

export { config }
export default defineConfig({ ...config })
