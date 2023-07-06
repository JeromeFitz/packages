const jestNode = require('@jeromefitz/jest-presets/jest/node/jest-preset.cjs')
const jestNext = require('next/jest')

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
module.exports = defineConfig(config)
