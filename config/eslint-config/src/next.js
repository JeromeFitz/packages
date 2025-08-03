import path from 'node:path'
import { fileURLToPath } from 'node:url'

import storybook from 'eslint-plugin-storybook'

import { getCompat, RULES } from './_lib.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = getCompat(__dirname)

const configNext = [
  ...storybook.configs['flat/recommended'],
  {
    ...compat.extends('plugin:@next/next/core-web-vitals')[0],
    name: '@jeromefitz/eslint-config:next:core-web-vitals',
    rules: { '@next/next/no-html-link-for-pages': RULES.OFF },
  },
  {
    ...compat.extends('plugin:@next/next/recommended')[0],
    name: '@jeromefitz/eslint-config:next:recommended',
  },
  {
    ...compat.extends('turbo')[0],
    name: '@jeromefitz/eslint-config:next:turbo',
    rules: {
      'turbo/no-undeclared-env-vars': [
        RULES.ERROR,
        {
          allowList: ['^ENV_[A-Z]+$'],
        },
      ],
    },
  },
]

export { configNext }
