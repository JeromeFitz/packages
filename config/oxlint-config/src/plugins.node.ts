import type { DummyRuleMap } from 'oxlint'

/**
 * @note(oxlint) migration
 * slowly move to only having overrides where necessary
 */
const overridesTemporary: DummyRuleMap = {
  /**
   * style
   */
  'node/global-require': 'off', // x5
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
  'node/no-process-env': 'off', // x92

  /**
   * suspicious
   */
}

const overrides: DummyRuleMap = {}

const rules: DummyRuleMap = {
  ...overridesTemporary,
  ...overrides,
}

export { rules as node }
