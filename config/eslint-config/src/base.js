import parserBabel from '@babel/eslint-parser'
import eslint from '@eslint/js'
import pluginPerfectionist from 'eslint-plugin-perfectionist'

import { RULES } from './_lib.js'

const PERFECTIONIST_CONFIG = 'recommended-natural'
const perfectionistRules = pluginPerfectionist.configs[PERFECTIONIST_CONFIG].rules

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
    plugins: { perfectionist: pluginPerfectionist },
    rules: {
      ...perfectionistRules,
      complexity: [RULES.ERROR, 10],
      'perfectionist/sort-imports': [
        RULES.ERROR,
        {
          customGroups: {
            type: {},
            value: {
              jeromefitz: '@jeromefitz/**',
              'jeromefitz-type': '@jeromefitz/**',
              'server-only': 'server-only',
            },
          },
          groups: [
            'server-only',
            'builtin',
            'jeromefitz-type',
            'jeromefitz',
            'type',
            'external',
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          internalPattern: ['@/**', '~**/**'],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
]

export { configBase }
