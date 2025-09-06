import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { getCompat } from './_lib.js'

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
]

export { configE2E }
