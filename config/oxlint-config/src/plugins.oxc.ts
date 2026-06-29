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

  /**
   * perf
   */

  /**
   * restriction
   */
  'oxc/no-async-await': 'off', // x178
  'oxc/no-barrel-file': 'off', // x3
  'oxc/no-optional-chaining': 'off', // x308
  'oxc/no-rest-spread-properties': 'off', // x567

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

export { rules as oxc }
