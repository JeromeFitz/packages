import type { DummyRuleMap, OxlintConfig } from "oxlint";

import { categories } from "./categories.ts";
import { globals } from "./globals.ts";
import { ignorePatterns } from "./ignore-patterns.ts";
import { jsPlugins } from "./js-plugins.ts";
import { overrides } from "./overrides.ts";
import { eslint } from "./plugins.eslint.ts";
import { importRules } from "./plugins.import.ts";
import { jsxA11y } from "./plugins.jsx-a11y.ts";
import { nextjs } from "./plugins.nextjs.ts";
import { node } from "./plugins.node.ts";
import { oxc } from "./plugins.oxc.ts";
import { promise } from "./plugins.promise.ts";
import { reactPerf } from "./plugins.react-perf.ts";
import { react } from "./plugins.react.ts";
import { plugins } from "./plugins.ts";
import { typescript } from "./plugins.typescript.ts";
import { unicorn } from "./plugins.unicorn.ts";

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
};

const rules: DummyRuleMap = {
  ...pluginsRules,
  /**
   * packages overrides
   */
  "no-empty-pattern": "off",
  "no-unused-expressions": "off",
  "no-unused-vars": "off",
  "no-useless-catch": "off",
  "jsx-a11y/no-autofocus": "off",
  "unicorn/filename-case": "off",
  "unicorn/no-empty-file": "off",
};

const config: OxlintConfig = {
  categories,
  globals,
  ignorePatterns,
  jsPlugins,
  overrides,
  plugins,
  rules,
};

export { config, overrides, rules };
