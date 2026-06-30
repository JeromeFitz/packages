import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

import { rewriteDistExportsPlugin } from "./scripts/tsdown.rewrite-dist-exports.plugin.ts";
import { rewriteDistExports } from "./scripts/tsdown.rewrite-dist-exports.ts";

const config: UserConfig = {
  attw: true,
  copy: ["README.md", "package.json", { from: "../../LICENSE" }],
  deps: { alwaysBundle: [], neverBundle: [] },
  dts: true,
  exports: true,
  failOnWarn: true,
  logLevel: "error",
  minify: true,
  outDir: "dist",
  plugins: [rewriteDistExportsPlugin],
  publint: true,
  sourcemap: false,
  target: ["node24"],
  treeshake: false,
};

export { config, rewriteDistExports };
export default defineConfig({ ...config });
