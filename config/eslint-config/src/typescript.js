import parserTypescript from '@typescript-eslint/parser'
import pluginImportX from 'eslint-plugin-import-x'
import tseslint from 'typescript-eslint'

import { RULES } from './_lib.js'
import configBase from './base.js'

/**
 * @hack(typescript-eslint) w/o run into following error
 *  b/c parser is passed as meta instead of explicit (?):
 *
 * Error while loading rule '@typescript-eslint/await-thenable':
 * You have used a rule which requires parserServices to be generated.
 * You must therefore provide a value for the "parserOptions.project"
 *  property for @typescript-eslint/parser.
 */
let recommendedTypeChecked = []
tseslint.configs.recommendedTypeChecked.map((obj) => {
  if (obj.name === 'typescript-eslint/base') {
    return {
      ...obj,
      languageOptions: {
        ...obj.languageOptions,
        parser: parserTypescript,
      },
    }
  }
  return obj
})
let stylisticTypeChecked = []
tseslint.configs.stylisticTypeChecked.map((obj) => {
  if (obj.name === 'typescript-eslint/base') {
    return {
      ...obj,
      languageOptions: {
        ...obj.languageOptions,
        parser: parserTypescript,
      },
    }
  }
  return obj
})

const configTypescript = [
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...recommendedTypeChecked,
  ...stylisticTypeChecked,
  pluginImportX.configs.typescript,
  /**
   * @note(eslint) Custom Settings for @jeromefitz/eslint-config
   */
  {
    files: ['**/*.ts?(x)'],
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
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
]

export { configTypescript }
export default [...configBase, ...configTypescript]
