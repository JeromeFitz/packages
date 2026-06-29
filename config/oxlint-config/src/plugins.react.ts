import type { DummyRuleMap } from "oxlint";

/**
 * @note(oxlint) migration
 * slowly move to only having overrides where necessary
 */
const overridesTemporary: DummyRuleMap = {
  /**
   * correctness
   */
  "react/exhaustive-deps": "off", // x5

  /**
   * nursery
   */
  "react/react-compiler": "off", // x21

  /**
   * pedantic
   */
  "react/jsx-no-useless-fragment": "off", // x48
  "react/no-unescaped-entities": "off", // x2

  /**
   * perf
   */
  "react/no-array-index-key": "off", // x19
  "react/no-object-type-as-default-prop": "off", // x5

  /**
   * restriction
   */
  "react/button-has-type": "off", // x1
  "react/forbid-component-props": "off", // x366
  "react/jsx-filename-extension": "off", // x186
  "react/jsx-no-literals": "off", // x425
  "react/no-multi-comp": "off", // x255
  "react/no-unknown-property": "off", // x10
  "react/only-export-components": "off", // x49

  /**
   * style
   */
  "react/hook-use-state": "off", // x11
  "react/jsx-boolean-value": "off", // x9
  "react/jsx-curly-brace-presence": "off", // x12
  "react/jsx-max-depth": "off", // x552
  "react/jsx-pascal-case": "off", // x25
  "react/jsx-props-no-spreading": "off", // x223
  "react/self-closing-comp": "off", // x28

  /**
   * suspicious
   */
  "react/iframe-missing-sandbox": "off", // x2
  "react/react-in-jsx-scope": "off", // x2237
};

const overrides: DummyRuleMap = {
  "react/exhaustive-deps": "warn",
};

const rules: DummyRuleMap = {
  ...overridesTemporary,
  ...overrides,
};

export { rules as react };
