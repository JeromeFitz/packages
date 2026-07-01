import { releaseRules as releaseRulesDefault } from "@jeromefitz/conventional-gitmoji";
import type { PluginSpec } from "semantic-release";

import type { ReleaseRule } from "./commit-analyzer.types";

const commitAnalyzer = (releaseRulesPassed: ReleaseRule[] = []): PluginSpec => {
  const releaseRules = [...releaseRulesDefault, ...releaseRulesPassed];

  return [
    "@semantic-release/commit-analyzer",
    {
      config: "@jeromefitz/conventional-gitmoji",
      releaseRules,
    },
  ];
};

export { commitAnalyzer };
