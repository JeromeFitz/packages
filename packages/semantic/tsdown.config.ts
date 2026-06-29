import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

import { config as _config } from "../../tsdown.config.ts";

const entry = ["src/getConfig.ts", "src/index.ts", "src/release.config.ts"];
const config: UserConfig = {
  ..._config,
  entry,
};

export default defineConfig({
  ...config,
});
