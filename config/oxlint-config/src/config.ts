import type { DummyRuleMap, OxlintConfig, OxlintOverride } from 'oxlint'

import { categories } from './categories.ts'
import { globals } from './globals.ts'
import { ignorePatterns } from './ignore-patterns.ts'
import { playwright } from './js-plugins.playwright.ts'
import { testingLibrary } from './js-plugins.testing-library.ts'
import {
  jsPluginPlaywright,
  jsPlugins,
  jsPluginTestingLibrary,
} from './js-plugins.ts'
import { eslint } from './plugins.eslint.ts'
import { importRules } from './plugins.import.ts'
import { jsxA11y } from './plugins.jsx-a11y.ts'
import { nextjs } from './plugins.nextjs.ts'
import { node } from './plugins.node.ts'
import { oxc } from './plugins.oxc.ts'
import { promise } from './plugins.promise.ts'
import { react } from './plugins.react.ts'
import { reactPerf } from './plugins.react-perf.ts'
import { plugins } from './plugins.ts'
import { typescript } from './plugins.typescript.ts'
import { unicorn } from './plugins.unicorn.ts'
import { vitest } from './plugins.vitest.ts'

const pluginsRules: DummyRuleMap = {
  ...eslint,
  ...importRules,
  ...jsxA11y,
  ...nextjs,
  ...node,
  ...oxc,
  ...promise,
  ...react,
  ...reactPerf,
  ...typescript,
  ...unicorn,
}

const config: OxlintConfig = {
  categories,
  globals,
  ignorePatterns,
  jsPlugins,
  plugins,
  rules: {
    ...pluginsRules,
  },
}

const overridePlaywright: OxlintOverride = {
  files: ['**/*.e2e.ts', '**/*.e2e.tsx', '**/e2e/**/*.ts'],
  jsPlugins: [jsPluginPlaywright],
  rules: { ...playwright },
}

const overrideVitest: OxlintOverride = {
  files: ['**/*.test.ts', '**/*.test.tsx'],
  jsPlugins: [jsPluginTestingLibrary],
  plugins: ['vitest'],
  rules: { ...vitest, ...testingLibrary },
}

export { config, overridePlaywright, overrideVitest }
