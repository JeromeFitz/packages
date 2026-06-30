import type { OxlintOverride } from "oxlint";

import { playwright } from "./js-plugins.playwright.ts";
import { testingLibrary } from "./js-plugins.testing-library.ts";
import { jsPluginPlaywright, jsPluginTestingLibrary } from "./js-plugins.ts";
import { vitest } from "./plugins.vitest.ts";

const overridePlaywright: OxlintOverride = {
  files: ["**/*.e2e.ts", "**/*.e2e.tsx", "**/e2e/**/*.ts"],
  jsPlugins: [jsPluginPlaywright],
  rules: { ...playwright },
};

const overrideVitest: OxlintOverride = {
  files: ["**/*.test.ts", "**/*.test.tsx"],
  jsPlugins: [jsPluginTestingLibrary],
  plugins: ["vitest"],
  rules: { ...vitest, ...testingLibrary },
};

const overrides = [overridePlaywright, overrideVitest];

export { overridePlaywright, overrides, overrideVitest };
