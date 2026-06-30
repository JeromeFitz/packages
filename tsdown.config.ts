import { readFileSync, writeFileSync } from "node:fs";

import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

function rewriteDistExports(pkgPath = "dist/package.json"): void {
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as Record<string, unknown>;
  const rewrite = (val: unknown): unknown => {
    if (typeof val === "string") return val.replace(/^\.\/dist\//, "./");
    if (Array.isArray(val)) return val.map(rewrite);
    if (val !== null && typeof val === "object") {
      return Object.fromEntries(
        Object.entries(val as Record<string, unknown>).map(([k, v]) => [k, rewrite(v)]),
      );
    }
    return val;
  };
  if (pkg.exports) pkg.exports = rewrite(pkg.exports);
  if (pkg.bin) pkg.bin = rewrite(pkg.bin);
  delete pkg.devEngines;
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}

const config: UserConfig = {
  attw: false,
  copy: ["README.md", "package.json", { from: "../../LICENSE" }],
  deps: { alwaysBundle: [], neverBundle: [] },
  dts: true,
  exports: true,
  failOnWarn: true,
  logLevel: "error",
  minify: true,
  onSuccess: () => rewriteDistExports(),
  outDir: "dist",
  publint: false,
  sourcemap: false,
  target: ["node24"],
  treeshake: false,
};

export { config, rewriteDistExports };
export default defineConfig({ ...config });
