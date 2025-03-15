/**
 * @note(eslint) this _had_ two exports
 *  but I do not use tailwind without next
 *
 * so in the rbeaking change to eslint@9
 *  this went back to just one
 *
 */
import path from 'path'
import { fileURLToPath } from 'url'

import { getCompat, RULES } from './_lib.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = getCompat(__dirname)

const configTailwind = [
  {
    ...compat.extends('plugin:tailwindcss/recommended')[0],
    name: '@jeromefitz/eslint-config:tailwind',
    rules: {
      'tailwindcss/classnames-order': RULES.OFF, // conflicts with prettier-plugin-tailwindcss
      'tailwindcss/enforces-negative-arbitrary-values': RULES.ERROR,
      'tailwindcss/enforces-shorthand': RULES.ERROR,
      'tailwindcss/migration-from-tailwind-2': RULES.ERROR,
      'tailwindcss/no-custom-classname': RULES.ERROR,
    },
  },
]

export { configTailwind }
