import type { UserConfig } from 'tsdown'

import { defineConfig } from 'tsdown'

const config: UserConfig = {
  attw: 'ci-only',
  dts: true,
  exports: true,
  external: [],
  failOnWarn: 'ci-only',
  logLevel: 'error',
  minify: true,
  noExternal: [],
  onSuccess: 'pnpm run copy',
  outDir: 'dist',
  publint: 'ci-only',
  sourcemap: false,
  target: ['node24'],
  treeshake: false,
}

export { config }
export default defineConfig({ ...config })
