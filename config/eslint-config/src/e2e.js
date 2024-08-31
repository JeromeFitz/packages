import path from 'path'
import { fileURLToPath } from 'url'

import { getCompat } from './_lib.js'
import { configReactDefault } from './react.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = getCompat(__dirname)

const configE2E = [
  {
    ...compat.extends('plugin:testing-library/react')[0],
    name: '@jeromefitz/eslint-config:e2e:testing-library',
  },
  {
    ...compat.extends('plugin:jest-dom/recommended')[0],
    name: '@jeromefitz/eslint-config:e2e:jest-dom',
  },
  {
    ...compat.extends('turbo')[0],
    name: '@jeromefitz/eslint-config:e2e:turbo',
  },
]

const configE2EDefault = [...configReactDefault, ...configE2E]

export { configE2E, configE2EDefault }
