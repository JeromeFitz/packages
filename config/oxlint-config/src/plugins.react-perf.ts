import type { DummyRuleMap } from "oxlint";

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
  "react-perf/jsx-no-jsx-as-prop": "off", // x15
  "react-perf/jsx-no-new-array-as-prop": "off", // x7
  "react-perf/jsx-no-new-function-as-prop": "off", // x13
  "react-perf/jsx-no-new-object-as-prop": "off", // x342

  /**
   * restriction
   */

  /**
   * style
   */

  /**
   * suspicious
   */
};

const overrides: DummyRuleMap = {};

const rules: DummyRuleMap = {
  ...overridesTemporary,
  ...overrides,
};

export { rules as reactPerf };
