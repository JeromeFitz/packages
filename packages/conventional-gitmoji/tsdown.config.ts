import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

import { config as _config } from "../../tsdown.config.ts";

const entry = ["src/**", "!src/**/*.test.ts", "!src/**/__snapshots__/**"];
const config: UserConfig = {
  ..._config,
  entry,
};

export default defineConfig({
  ...config,
});
