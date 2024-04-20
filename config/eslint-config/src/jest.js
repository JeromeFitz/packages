import path from 'path'
import { fileURLToPath } from 'url'

import _findIndex from 'lodash/findIndex.js'
import _merge from 'lodash/merge.js'

import { getCompat } from './_lib.js'
import configReact from './react.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = getCompat(__dirname)

/**
 * @hack(eslint) jest manipulation for typescript
 */
const ESLINT_HACK__CONFIG = configReact
const ESLINT_HACK__NAME = '@jeromefitz/eslint-config:typescript'
const ESLINT_HACK__INDEX = _findIndex(configReact, { name: ESLINT_HACK__NAME })
const ESLINT_HACK__OBJECT = _merge(configReact[ESLINT_HACK__INDEX], {
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.json', './tsconfig.jest.json'],
    },
  },
})

ESLINT_HACK__CONFIG[ESLINT_HACK__INDEX] = ESLINT_HACK__OBJECT

const configJest = [
  {
    ...compat.extends('plugin:testing-library/react')[0],
    name: '@jeromefitz/eslint-config:jest:testing-library',
  },
  {
    ...compat.extends('plugin:jest-dom/recommended')[0],
    name: '@jeromefitz/eslint-config:jest:jest-dom',
  },
]

export default [...ESLINT_HACK__CONFIG, ...configJest]
