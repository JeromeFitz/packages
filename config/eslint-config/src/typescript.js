import { flatConfigs } from 'eslint-plugin-import-x'
import { configs, parser } from 'typescript-eslint'

import { RULES } from './_lib.js'
import { configBase } from './base.js'

let recommendedTypeChecked = []
configs.recommendedTypeChecked.map((obj) => {
  if (obj.name === 'typescript-eslint/base') {
    return {
      ...obj,
      languageOptions: {
        ...obj.languageOptions,
        parser,
      },
    }
  }
  return obj
})
let stylisticTypeChecked = []
configs.stylisticTypeChecked.map((obj) => {
  if (obj.name === 'typescript-eslint/base') {
    return {
      ...obj,
      languageOptions: {
        ...obj.languageOptions,
        parser,
      },
    }
  }
  return obj
})

const configTypescript = [
  configs.eslintRecommended,
  ...configs.recommended,
  ...configs.stylistic,
  ...recommendedTypeChecked,
  ...stylisticTypeChecked,
  flatConfigs.recommended,
  flatConfigs.typescript,
  /**
   * @note(eslint) Custom Settings for @jeromefitz/eslint-config
   */
  {
    files: ['**/*.ts?(x)'],
    languageOptions: {
      parser,
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        project: ['./tsconfig.json'],
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    name: '@jeromefitz/eslint-config:typescript',
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': RULES.OFF,
      '@typescript-eslint/no-duplicate-type-constituents': RULES.ERROR,
      '@typescript-eslint/no-empty-function': RULES.OFF,
      '@typescript-eslint/no-explicit-any': RULES.OFF,
      '@typescript-eslint/no-floating-promises': RULES.ERROR,
      '@typescript-eslint/no-non-null-assertion': RULES.OFF,
      '@typescript-eslint/no-redundant-type-constituents': RULES.ERROR,
      // @todo(lint) ⬇️ move to error
      '@typescript-eslint/no-unsafe-argument': RULES.OFF,
      '@typescript-eslint/no-unsafe-assignment': RULES.OFF,
      '@typescript-eslint/no-unsafe-call': RULES.OFF,
      '@typescript-eslint/no-unsafe-member-access': RULES.OFF,
      '@typescript-eslint/no-unsafe-return': RULES.OFF,
      '@typescript-eslint/no-var-requires': RULES.WARN,
      '@typescript-eslint/require-await': RULES.ERROR,
      '@typescript-eslint/restrict-template-expressions': RULES.OFF,
    },
  },
  {
    name: '@jeromefitz/eslint-config:import-x',
    rules: {
      'import-x/no-deprecated': RULES.ERROR,
      'import-x/no-unresolved': RULES.OFF,
    },
    settings: {
      'import-x/resolver': {
        typescript: true,
      },
    },
  },
]

const configTypescriptDefault = [...configBase, ...configTypescript]

export { configTypescript, configTypescriptDefault }
