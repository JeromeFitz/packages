import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

const config: UserConfig = {
  attw: false,
  copy: [{ from: "../../LICENSE", to: "." }],
  deps: { alwaysBundle: [], neverBundle: [] },
  dts: true,
  exports: { devExports: "development" },
  failOnWarn: true,
  logLevel: "error",
  minify: true,
  outDir: "dist",
  publint: false,
  sourcemap: false,
  target: ["node24"],
  treeshake: false,
};

export { config };
export default defineConfig({ ...config });
