import path from 'path'
import { fileURLToPath } from 'url'

/**
 * @todo(eslint) cycle through each one until we are good to go back to: react
 */
import { configReactDefault } from '@jeromefitz/eslint-config/src/react.js'

// import { configE2EDefault } from '@jeromefitz/eslint-config/src/e2e.js'
// import { configJestDefault } from '@jeromefitz/eslint-config/src/jest.js'
// import { configNextDefault } from '@jeromefitz/eslint-config/src/next.js'
// import { configTailwindDefault } from '@jeromefitz/eslint-config/src/tailwind.js'
// import { configTurboDefault } from '@jeromefitz/eslint-config/src/turbo.js'

import _findIndex from 'lodash/findIndex.js'
import _merge from 'lodash/merge.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * @hack(eslint) monorepo manipulation for typescript
 */
const ESLINT_HACK__CONFIG = configReactDefault
const ESLINT_HACK__NAME = '@jeromefitz/eslint-config:typescript'
const ESLINT_HACK__INDEX = _findIndex(configReactDefault, {
  name: ESLINT_HACK__NAME,
})
const ESLINT_HACK__OBJECT = _merge(configReactDefault[ESLINT_HACK__INDEX], {
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

export default [...ESLINT_HACK__CONFIG]
