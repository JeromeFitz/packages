/**
 * @todo(eslint) I think I should just getCompat and do multiple
 */
import path from 'path'
import { fileURLToPath } from 'url'

import pluginTypescript from '@typescript-eslint/eslint-plugin'
import parserTypescript from '@typescript-eslint/parser'
import pluginImport from 'eslint-plugin-import'

import { RULES, getCompat } from './_lib.js'
import configBase from './base.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = getCompat(__dirname)

const typescriptRules = {
  ...pluginTypescript.configs['eslint-recommended'].overrides[0].rules,
  ...pluginTypescript.configs['recommended'].rules,
  ...pluginTypescript.configs['recommended-requiring-type-checking'].rules,
}

const configTypescript = [
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
    plugins: { '@typescript-eslint': pluginTypescript, import: pluginImport },
    rules: {
      ...typescriptRules,
      ...compat.extends('plugin:import/typescript')[0]?.rules,
      '@typescript-eslint/explicit-module-boundary-types': RULES.OFF,
      '@typescript-eslint/no-empty-function': RULES.OFF,
      '@typescript-eslint/no-explicit-any': RULES.OFF,
      '@typescript-eslint/no-non-null-assertion': RULES.OFF,
      '@typescript-eslint/no-unsafe-argument': RULES.OFF, // @todo(lint) move to error
      '@typescript-eslint/no-unsafe-assignment': RULES.OFF,
      '@typescript-eslint/no-unsafe-call': RULES.OFF,
      '@typescript-eslint/no-unsafe-member-access': RULES.OFF,
      '@typescript-eslint/no-unsafe-return': RULES.OFF,
      '@typescript-eslint/no-var-requires': RULES.WARN,
      '@typescript-eslint/restrict-template-expressions': RULES.OFF,
    },
  },
  // overrides: [
  //   {
  //     extends: [
  //       'plugin:@typescript-eslint/eslint-recommended',
  //       'plugin:@typescript-eslint/recommended',
  //       'plugin:@typescript-eslint/recommended-requiring-type-checking',
  //       'plugin:import/typescript',
  //     ],
  //     plugins: ['@typescript-eslint', 'import'],
  //   },
]

export default [...configBase, ...configTypescript]
