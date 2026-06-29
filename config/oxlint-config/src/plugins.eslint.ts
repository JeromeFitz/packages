import type { DummyRuleMap } from 'oxlint'

/**
 * @note(oxlint) migration
 * slowly move to only having overrides where necessary
 */
const overridesTemporary: DummyRuleMap = {
  /**
   * pedantic
   */
  'array-callback-return': 'off', // x71

  /**
   * style
   */
  'arrow-body-style': 'off', // x75
  'capitalized-comments': 'off', // x894

  /**
   * restriction
   */
  'class-methods-use-this': 'off', // x2
  curly: 'off', // x103
  'func-names': 'off', // x6
  'func-style': 'off', // x374
  'id-length': 'off', // x103
  'init-declarations': 'off', // x15
  'logical-assignment-operators': 'off', // x1
  'max-lines': 'off', // x12
  'max-lines-per-function': 'off', // x105
  'max-statements': 'off', // x195
  'new-cap': 'off', // x2

  /**
   * perf
   */
  'no-await-in-loop': 'off', // x3
  'no-console': 'off', // x76
  'no-duplicate-imports': 'off', // x31
  'no-else-return': 'off', // x3
  'no-empty-function': 'off', // x5
  'no-implicit-coercion': 'off', // x51
  'no-implicit-globals': 'off', // x1
  'no-inline-comments': 'off', // x16
  'no-magic-numbers': 'off', // x416
  'no-negated-condition': 'off', // x13
  'no-nested-ternary': 'off', // x12
  'no-param-reassign': 'off', // x2
  'no-plusplus': 'off', // x18
  'no-promise-executor-return': 'off', // x1

  /**
   * suspicious
   */
  'no-shadow': 'off', // x43
  'no-template-curly-in-string': 'off', // x1
  'no-ternary': 'off', // x192

  /**
   * nursery
   */
  'no-undef': 'off', // x253
  'no-undefined': 'off', // x45
  'no-underscore-dangle': 'off', // x61
  'no-unneeded-ternary': 'off', // x3
  /**
   * correctness
   */
  'no-unsafe-optional-chaining': 'warn', // x4
  'no-unused-expressions': 'warn', // x10
  'no-unused-vars': 'warn', // x34
  'no-use-before-define': 'off', // x159
  'no-useless-assignment': 'off', // x6
  'no-useless-computed-key': 'off', // x1
  'no-useless-return': 'off', // x1
  'no-void': 'off', // x15
  'no-warning-comments': 'off', // x1
  'object-shorthand': 'off', // x2
  'prefer-arrow-callback': 'off', // x4
  'prefer-const': 'off', // x6
  'prefer-destructuring': 'off', // x83
  'prefer-named-capture-group': 'off', // x4
  'prefer-template': 'off', // x33
  radix: 'off', // x3
  'require-await': 'off', // x8
  'require-unicode-regexp': 'off', // x48
  'sort-imports': 'off', // x487
  'sort-keys': 'off', // x93
  'sort-vars': 'off', // x2
  // "sort-keys": ["warn", "asc", { allowLineSeparatedGroups: true }],
  yoda: 'off', // x1
}

const overrides: DummyRuleMap = {
  complexity: ['error', { max: 10 }],
}

const rules: DummyRuleMap = {
  ...overridesTemporary,
  ...overrides,
}

export { rules as eslint }
