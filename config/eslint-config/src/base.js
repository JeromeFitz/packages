import parserBabel from '@babel/eslint-parser'
import eslint from '@eslint/js'

import { RULES } from './_lib.js'

const configBase = [
  eslint.configs.recommended,
  {
    ignores: [
      '.next/*',
      'dist/*',
      'node_modules/*',
      '**/.next/*',
      '**/dist/*',
      '**/node_modules/*',
    ],
    name: '@jeromefitz/eslint-config:ignores',
  },
  {
    languageOptions: {
      parser: parserBabel,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
        requireConfigFile: false,
        sourceType: 'module',
      },
    },
    name: '@jeromefitz/eslint-config:base',
    rules: {
      complexity: [RULES.ERROR, 10],
    },
  },
]

export { configBase }
