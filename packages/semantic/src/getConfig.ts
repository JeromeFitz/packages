import type { Options as SemanticReleaseOptions } from "semantic-release";

import type { PluginOptions } from "./plugins/index";
import { getPluginOptions } from "./plugins/index";

type GetConfigOptions = Partial<Omit<SemanticReleaseOptions, "plugins">> & PluginOptions;

const getConfig = (configPassed: GetConfigOptions = {}): SemanticReleaseOptions => {
  const plugins = getPluginOptions(configPassed);

  return {
    branches: [{ name: "main" }, { name: "canary", prerelease: "canary" }],
    extends: ["semantic-release-commit-filter"],
    tagFormat: `v\${version}`,
    ...(configPassed as Partial<SemanticReleaseOptions>),
    plugins,
  };
};

export type { GetConfigOptions };
export { getConfig };
