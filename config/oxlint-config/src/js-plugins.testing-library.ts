import testingLibraryPlugin from "eslint-plugin-testing-library";
import type { DummyRuleMap } from "oxlint";

const rulesRecommended: DummyRuleMap = {
  ...testingLibraryPlugin.configs.react.rules,
};

const overrides: DummyRuleMap = {};

const rules: DummyRuleMap = {
  ...rulesRecommended,
  ...overrides,
};

export { rules as testingLibrary };
