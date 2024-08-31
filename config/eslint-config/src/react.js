import path from 'path'
import { fileURLToPath } from 'url'

import { getCompat } from './_lib.js'
import { configTypescriptDefault } from './typescript.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = getCompat(__dirname)

const configReact = [
  {
    ...compat.extends('plugin:jsx-a11y/recommended')[0],
    name: '@jeromefitz/eslint-config:react:jsx-a11y',
  },
  {
    ...compat.extends('plugin:react-hooks/recommended')[0],
    name: '@jeromefitz/eslint-config:react:react-hooks',
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]

const configReactDefault = [...configTypescriptDefault, ...configReact]

export { configReact, configReactDefault }
