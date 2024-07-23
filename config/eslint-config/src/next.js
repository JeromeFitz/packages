import path from 'path'
import { fileURLToPath } from 'url'

import { getCompat, RULES } from './_lib.js'
import configReact from './react.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = getCompat(__dirname)

const configNext = [
  {
    ...compat.extends('plugin:storybook/recommended')[0],
    name: '@jeromefitz/eslint-config:next:storybook',
  },
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
export default [...configReact, ...configNext]
