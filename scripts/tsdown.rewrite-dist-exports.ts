import { readFileSync, writeFileSync } from "node:fs";

function rewriteDistExports(pkgPath = "dist/package.json"): void {
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as Record<string, unknown>;

  const rewrite = (val: unknown): unknown => {
    if (typeof val === "string") return val.replace(/^\.\/dist\//, "./");
    if (Array.isArray(val)) return val.map(rewrite);
    if (val !== null && typeof val === "object") {
      const obj = val as Record<string, unknown>;
      if ("development" in obj) {
        const { development: _development, ...rest } = obj;
        const keys = Object.keys(rest);
        // @note(rewrite-dist-exports) published package never needs the
        // workspace-only `development` condition; collapse to `default` alone
        if (keys.length === 1 && keys[0] === "default") return rewrite(rest.default);
        return Object.fromEntries(Object.entries(rest).map(([k, v]) => [k, rewrite(v)]));
      }
      return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, rewrite(v)]));
    }
    return val;
  };

  // @note(rewrite-dist-exports) publishConfig overrides win over the
  // workspace-local fields before we rewrite/strip anything
  const PUBLISH_CONFIG_PASSTHROUGH = new Set(["access", "provenance", "registry", "tag"]);
  if (pkg.publishConfig && typeof pkg.publishConfig === "object") {
    for (const [key, value] of Object.entries(pkg.publishConfig as Record<string, unknown>)) {
      if (!PUBLISH_CONFIG_PASSTHROUGH.has(key)) pkg[key] = value;
    }
  }

  if (pkg.exports) pkg.exports = rewrite(pkg.exports);
  if (pkg.bin) pkg.bin = rewrite(pkg.bin);

  // @note(rewrite-dist-exports) dist/ is now the package root at publish time;
  // these fields are either meaningless there or actively wrong
  delete pkg.devEngines;
  delete pkg.publishConfig;
  delete pkg.files;
  delete pkg.scripts;
  delete pkg.devDependencies;

  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}

export { rewriteDistExports };
