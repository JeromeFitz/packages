import type { DummyRuleMap } from 'oxlint'

/**
 * @note(oxlint) migration
 * slowly move to only having overrides where necessary
 */
const overridesTemporary: DummyRuleMap = {
  /**
   * correctness
   */
  'nextjs/no-async-client-component': 'off', // x2
  'nextjs/no-html-link-for-pages': 'off', // x2
  'nextjs/no-img-element': 'off', // x3

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

export { rules as nextjs }
