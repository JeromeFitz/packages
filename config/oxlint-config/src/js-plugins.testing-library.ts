import type { DummyRuleMap } from 'oxlint'

import testingLibraryPlugin from 'eslint-plugin-testing-library'

const rulesRecommended: DummyRuleMap = {
  ...testingLibraryPlugin.configs.react.rules,
}

const overrides: DummyRuleMap = {}

const rules: DummyRuleMap = {
  ...rulesRecommended,
  ...overrides,
}

export { rules as testingLibrary }
