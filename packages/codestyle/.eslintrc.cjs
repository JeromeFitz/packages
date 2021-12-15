module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['prettier', 'plugin:import/errors', 'plugin:import/warnings'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import', 'jest'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.jest.json'],
        // typescript-eslint specific options
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
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  plugins: ['import', 'jsx-a11y', 'react-hooks', 'jest'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  // http://eslint.org/docs/rules/
  rules: {
    complexity: [2, 10],
    'import/default': 0, // @todo
    'import/named': 0, // @todo
    'import/namespace': 0, // @todo
    'import/no-unresolved': 0, // @todo
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~**/**',
            group: 'sibling',
            position: 'before',
          },
        ],
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
}
