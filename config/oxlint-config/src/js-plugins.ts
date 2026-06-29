import type { ExternalPluginEntry } from "oxlint";

const jsPluginPlaywright: ExternalPluginEntry = {
  name: "playwright",
  specifier: "eslint-plugin-playwright",
};

const jsPluginTestingLibrary: ExternalPluginEntry = {
  name: "testing-library",
  specifier: "eslint-plugin-testing-library",
};

const jsPlugins: ExternalPluginEntry[] = [];

export { jsPluginPlaywright, jsPlugins, jsPluginTestingLibrary };
