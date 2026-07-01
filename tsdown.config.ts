import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

import { rewriteDistExportsPlugin } from "./scripts/tsdown.rewrite-dist-exports.plugin.ts";

const config: UserConfig = {
  attw: true,
  copy: [
    { from: "../../LICENSE", to: "dist" },
    { from: "README.md", to: "dist" },
  ],
  deps: { alwaysBundle: [], neverBundle: [] },
  dts: true,
  exports: { devExports: "development" },
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

export { config };
export default defineConfig({ ...config });
