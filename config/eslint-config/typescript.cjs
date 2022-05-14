const eslintBase = require('./base.cjs')

const eslintTypescript = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        warnOnUnsupportedTypeScriptVersion: true,
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      // Set ESLint rule to "never" if TypeScript overrides
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unsafe-argument': 0, // @todo(lint) move to error
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-var-requires': 1,
        '@typescript-eslint/restrict-template-expressions': 0,
      },
    },
  ],
}

module.exports = {
  ...eslintBase,
  ...eslintTypescript,
}
