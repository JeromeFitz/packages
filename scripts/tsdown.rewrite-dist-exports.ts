import { readFileSync, writeFileSync } from "node:fs";

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

export { rewriteDistExports };
