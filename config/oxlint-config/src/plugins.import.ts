import type { DummyRuleMap } from 'oxlint'

/**
 * @note(oxlint) migration
 * slowly move to only having overrides where necessary
 */
const overridesTemporary: DummyRuleMap = {
  /**
   * correctness
   */
  'import/default': 'off', // x1

  /**
   * style
   */
  'import/exports-last': 'off', // x52
  'import/first': 'off', // x51
  'import/group-exports': 'off', // x140

  /**
   * pedantic
   */
  'import/max-dependencies': 'off', // x33

  /**
   * nursery
   */
  'import/named': 'off', // x18
  'import/newline-after-import': 'off', // x8
  'import/no-anonymous-default-export': 'off', // x7

  /**
   * perf
   */

  /**
   * restriction
   */
  'import/no-commonjs': 'off', // x28
  'import/no-cycle': 'off', // x22
  'import/no-default-export': 'off', // x82
  'import/no-named-export': 'off', // x565
  'import/no-namespace': 'off', // x10
  'import/no-nodejs-modules': 'off', // x23
  'import/no-relative-parent-imports': 'off', // x89

  /**
   * suspicious
   */
  'import/no-unassigned-import': 'off', // x28
  'import/prefer-default-export': 'off', // x203
  'import/unambiguous': 'off', // x12
}

const overrides: DummyRuleMap = {}

const rules: DummyRuleMap = {
  ...overridesTemporary,
  ...overrides,
}

export { rules as importRules }
