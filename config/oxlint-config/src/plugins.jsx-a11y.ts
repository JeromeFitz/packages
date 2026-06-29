import type { DummyRuleMap } from 'oxlint'

/**
 * @note(oxlint) migration
 * slowly move to only having overrides where necessary
 */
const overridesTemporary: DummyRuleMap = {
  /**
   * correctness
   */
  'jsx-a11y/control-has-associated-label': 'off', // x1
  'jsx-a11y/prefer-tag-over-role': 'off', // x181

  /**
   * nursery
   */
  /**
   * pedantic
   */
  /**
   * perf
   */
  /**
   * restriction
   */
  /**
   * style
   */
  /**
   * suspicious
   */
}

const overrides: DummyRuleMap = {}

const rules: DummyRuleMap = {
  ...overridesTemporary,
  ...overrides,
}

export { rules as jsxA11y }
