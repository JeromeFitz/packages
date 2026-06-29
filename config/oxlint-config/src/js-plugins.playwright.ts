import playwrightPlugin from "eslint-plugin-playwright";
import type { DummyRuleMap } from "oxlint";

const rulesRecommended: DummyRuleMap = {
  ...playwrightPlugin.configs.recommended.rules,
};

const overrides: DummyRuleMap = {};

const rules: DummyRuleMap = {
  ...rulesRecommended,
  ...overrides,
};

export { rules as playwright };
