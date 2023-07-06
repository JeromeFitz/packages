import jestNode from '@jeromefitz/jest-presets/src/jest/node/jest-preset.mjs'
import jestNext from 'next/jest'

/** @type {import('jest').Config} */
const config = {
  coverageReporters: ['text', 'html'],
  // preset: '@jeromefitz/jest-presets/jest/node',
  setupFilesAfterEnv: ['@jeromefitz/jest-config/jest.setup.cjs'],
  testEnvironment: 'jest-environment-jsdom',
  watchman: false,
  ...jestNode,
}

const defineConfig = jestNext({ dir: './' })

export default defineConfig(config)
