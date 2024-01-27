const config = require('./base.cjs')

const OFF = 0
const WARN = 1
// const ERROR = 2

const configTs = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
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
      plugins: ['@typescript-eslint', 'import'],
      // Set ESLint rule to "never" if TypeScript overrides
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/no-empty-function': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,
        '@typescript-eslint/no-unsafe-argument': OFF, // @todo(lint) move to error
        '@typescript-eslint/no-unsafe-assignment': OFF,
        '@typescript-eslint/no-unsafe-call': OFF,
        '@typescript-eslint/no-unsafe-member-access': OFF,
        '@typescript-eslint/no-unsafe-return': OFF,
        '@typescript-eslint/no-var-requires': WARN,
        '@typescript-eslint/restrict-template-expressions': OFF,
      },
    },
  ],
}

module.exports = {
  ...config,
  ...configTs,
}
