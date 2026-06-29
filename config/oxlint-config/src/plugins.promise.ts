import type { DummyRuleMap } from 'oxlint'

/**
 * @note(oxlint) migration
 * slowly move to only having overrides where necessary
 */
const overridesTemporary: DummyRuleMap = {
  /**
   * suspicious
   */
  'promise/always-return': 'off', // x1
  /**
   * correctness
   */

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
  'promise/avoid-new': 'off', // x1
  'promise/prefer-await-to-then': 'off', // x3
}

const overrides: DummyRuleMap = {}

const rules: DummyRuleMap = {
  ...overridesTemporary,
  ...overrides,
}

export { rules as promise }
