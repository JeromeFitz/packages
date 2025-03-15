import turbo from 'eslint-plugin-turbo'

import { RULES } from './_lib.js'

const configTurbo = [
  {
    name: '@jeromefitz/eslint-config:turbo',
    plugins: {
      turbo,
    },
    rules: {
      'turbo/no-undeclared-env-vars': RULES.ERROR,
    },
  },
]

export { configTurbo }
