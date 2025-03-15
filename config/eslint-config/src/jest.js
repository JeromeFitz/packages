import path from 'path'
import { fileURLToPath } from 'url'

import { getCompat } from './_lib.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = getCompat(__dirname)

let configJest = [
  {
    ...compat.extends('plugin:testing-library/react')[0],
    name: '@jeromefitz/eslint-config:jest:testing-library',
  },
  {
    ...compat.extends('plugin:jest-dom/recommended')[0],
    name: '@jeromefitz/eslint-config:jest:jest-dom',
  },
]

export { configJest }
