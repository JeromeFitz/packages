// const OFF = 0
// const WARN = 1
const ERROR = 2

const baseConfig = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['plugin:perfectionist/recommended-natural'],
  ignorePatterns: ['**/.next/*', '**/dist/*', '**/node_modules/*'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['perfectionist'],
  root: true,
  // http://eslint.org/docs/rules/
  rules: {
    complexity: [ERROR, 10],
    // 'import/order': [
    //   'error',
    //   {
    //     alphabetize: { order: 'asc', caseInsensitive: true },
    //     groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    //     'newlines-between': 'always',
    //     pathGroups: [
    //       {
    //         pattern: '~**/**',
    //         group: 'sibling',
    //         position: 'before',
    //       },
    //     ],
    //   },
    // ],
    'perfectionist/sort-imports': [
      ERROR,
      {
        'custom-groups': {
          type: {},
          value: {
            jeromefitz: '@jeromefitz/**',
            'server-only': 'server-only',
          },
        },
        groups: [
          'server-only',
          'builtin',
          'jeromefitz-type',
          'jeromefitz',
          'type',
          'external',
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'internal-pattern': [
          '@/**',
          '~**/**',
          // '@/components/**',
          // '@/stores/**',
          // '@/pages/**',
          // '@/lib/**',
        ],
        'newlines-between': 'always',
        order: 'asc',
        type: 'natural',
      },
    ],
  },
}

module.exports = baseConfig
