import type { DummyRuleMap } from 'oxlint'

import playwrightPlugin from 'eslint-plugin-playwright'

const rulesRecommended: DummyRuleMap = {
  ...playwrightPlugin.configs.recommended.rules,
}

const overrides: DummyRuleMap = {}

const rules: DummyRuleMap = {
  ...rulesRecommended,
  ...overrides,
}

export { rules as playwright }
