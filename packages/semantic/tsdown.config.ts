import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

import { config as _config } from "../../tsdown.config.ts";

const entry = ["src/get-config.ts", "src/index.ts", "src/release.config.ts"];
const config: UserConfig = {
  ..._config,
  copy: ["README.md", "package.json", { from: "../../LICENSE" }, { from: "../../.npmignore" }],
  entry,
};

export default defineConfig({
  ...config,
});
