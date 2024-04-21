import path from 'path'
import { fileURLToPath } from 'url'

/**
 * @todo(eslint) cycle through each one until we are good to go back to: react
 */
import config from '@jeromefitz/eslint-config/src/react.js'

// import config from '@jeromefitz/eslint-config/src/next.js'
// import config from '@jeromefitz/eslint-config/src/jest.js'
// import config from '@jeromefitz/eslint-config/src/e2e.js'
// import config from '@jeromefitz/eslint-config/src/tailwind.js'

import _findIndex from 'lodash/findIndex.js'
import _merge from 'lodash/merge.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * @hack(eslint) monorepo manipulation for typescript
 */
const ESLINT_HACK__CONFIG = config
const ESLINT_HACK__NAME = '@jeromefitz/eslint-config:typescript'
const ESLINT_HACK__INDEX = _findIndex(config, { name: ESLINT_HACK__NAME })
const ESLINT_HACK__OBJECT = _merge(config[ESLINT_HACK__INDEX], {
  languageOptions: {
    parserOptions: {
      project: [
        './tsconfig.json',
        './tsconfig.eslint.json',
        './config/*/tsconfig.json',
        './packages/*/tsconfig.json',
      ],
      tsconfigRootDir: __dirname,
    },
  },
})

ESLINT_HACK__CONFIG[ESLINT_HACK__INDEX] = ESLINT_HACK__OBJECT

// console.dir(ESLINT_HACK__CONFIG)

export default ESLINT_HACK__CONFIG
