module.exports = {
  extends: ['prettier', 'plugin:import/errors', 'plugin:import/warnings'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      // 0 off, 1 warn, 2 error
      rules: {
        '@typescript-eslint/ban-ts-comment': 2,
        '@typescript-eslint/ban-types': 2,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 2,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-floating-promises': 2,
        '@typescript-eslint/no-inferrable-types': 2,
        '@typescript-eslint/no-misused-promises': 2,
        '@typescript-eslint/no-non-null-assertion': 2,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-var-requires': 1,
        '@typescript-eslint/prefer-regexp-exec': 0, // @todo(lint) move to error
        '@typescript-eslint/require-await': 2,
        '@typescript-eslint/restrict-plus-operands': 0, // @todo(lint) move to error
        '@typescript-eslint/restrict-template-expressions': 0,
      },
    },
  ],
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-hooks', 'import'],
  // 0 off, 1 warn, 2 error
  rules: {
    complexity: [2, 10],
    'handle-callback-err': 2,
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
    'max-len': [
      2,
      {
        code: 100,
        ignoreComments: true,
        // "ignoreTrailingComments": true,
        // "ignoreUrls": true,
        // "ignoreStrings": true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        // "ignorePattern": true,
        tabWidth: 2,
      },
    ],
    'no-empty': 2,
    'no-label-var': 2,
    'no-multi-spaces': 2,
    'prefer-object-spread': 2,
    'react/jsx-no-literals': [
      2,
      {
        noStrings: true,
        allowedStrings: [],
        ignoreProps: true,
        noAttributeStrings: false,
      },
    ],
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'valid-jsdoc': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
