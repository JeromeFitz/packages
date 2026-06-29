import type { DummyRuleMap } from 'oxlint'

/**
 * @note(oxlint) migration
 * slowly move to only having overrides where necessary
 */
const overridesTemporary: DummyRuleMap = {
  /**
   * correctness
   */
  /**
   * nursery
   */
  /**
   * pedantic
   */
  'typescript/ban-ts-comment': 'off', // x110

  /**
   * style
   */
  'typescript/consistent-indexed-object-style': 'off', // x2
  'typescript/consistent-type-definitions': 'off', // x26
  'typescript/consistent-type-imports': 'off', // x3

  /**
   * perf
   */
  /**
   * restriction
   */
  'typescript/explicit-function-return-type': 'off', // x644
  'typescript/explicit-member-accessibility': 'off', // x8
  'typescript/explicit-module-boundary-types': 'off', // x599
  'typescript/no-dynamic-delete': 'off', // x5
  'typescript/no-explicit-any': 'off', // x484
  'typescript/no-inferrable-types': 'off', // x2
  'typescript/no-non-null-assertion': 'off', // x2
  'typescript/no-require-imports': 'off', // x15
  'typescript/no-var-requires': 'off', // x4
  'typescript/prefer-enum-initializers': 'off', // x3
  'typescript/prefer-for-of': 'off', // x1
  'typescript/prefer-ts-expect-error': 'off', // x109

  /**
   * suspicious
   */
}

const overrides: DummyRuleMap = {
  // "no-nested-ternary": "off",
}

const rules: DummyRuleMap = {
  ...overridesTemporary,
  ...overrides,
}

export { rules as typescript }
