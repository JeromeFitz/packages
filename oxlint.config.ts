import { config } from "@jeromefitz/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  ...config,
  // anything below overrides above
  env: {
    builtin: true,
  },
  options: {
    maxWarnings: 50,
    reportUnusedDisableDirectives: "allow",
    typeAware: false,
    typeCheck: false,
  },
  settings: {
    react: {
      // renovate: datasource=npm depName=react
      version: "19.2.7",
    },
  },
});
