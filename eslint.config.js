import path from 'path'
import { fileURLToPath } from 'url'

/**
 * @todo(eslint) cycle through each one until we are good to go back to: react
 */
import { configBase } from '@jeromefitz/eslint-config/src/base.js'
import { configE2E } from '@jeromefitz/eslint-config/src/e2e.js'
import { configJest } from '@jeromefitz/eslint-config/src/jest.js'
import { configNext } from '@jeromefitz/eslint-config/src/next.js'
import { configReact } from '@jeromefitz/eslint-config/src/react.js'
import { configTailwind } from '@jeromefitz/eslint-config/src/tailwind.js'
import { configTurbo } from '@jeromefitz/eslint-config/src/turbo.js'
import { configTypescript } from '@jeromefitz/eslint-config/src/typescript.js'

import { defineConfig } from 'eslint/config'
import _findIndex from 'lodash/findIndex.js'
import _merge from 'lodash/merge.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * @hack(eslint) monorepo manipulation for typescript
 */
const ESLINT_HACK_REACT__CONFIG = configReact
const ESLINT_HACK_REACT__NAME = '@jeromefitz/eslint-config:typescript'
const ESLINT_HACK_REACT__INDEX = _findIndex(configReact, {
  name: ESLINT_HACK_REACT__NAME,
})
const ESLINT_HACK_REACT__OBJECT = _merge(configReact[ESLINT_HACK_REACT__INDEX], {
  languageOptions: {
    parserOptions: {
      project: [
        './tsconfig.json',
        './tsconfig.eslint.json',
        './config/*/tsconfig.json',
        './packages/*/tsconfig.json',
      ],
      tsconfigRootDir: __dirname,
    },
  },
})

ESLINT_HACK_REACT__CONFIG[ESLINT_HACK_REACT__INDEX] = ESLINT_HACK_REACT__OBJECT

/** @type {import('typescript-eslint').Config} */
const config = defineConfig([
  ...configBase,
  ...configE2E,
  ...configJest,
  ...configNext,
  ...ESLINT_HACK_REACT__CONFIG,
  ...configTailwind,
  ...configTurbo,
  ...configTypescript,
  {
    files: [`**/*.ts?(x)`],
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'no-restricted-imports': [
        'error',
        {
          message: 'Use local <Anchor /> instead',
          name: 'next/link',
        },
      ],
      'turbo/no-undeclared-env-vars': 'off',
    },
  },
])

// console.dir(`> config`)
// console.dir(config)

export default config
