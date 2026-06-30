import { copyFileSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import type { TsdownPlugin } from "tsdown";

import { rewriteDistExports } from "./tsdown.rewrite-dist-exports.ts";

const ATTW_PROFILES: Record<string, string[]> = {
  strict: [],
  node16: ["node10"],
  "esm-only": ["node10", "node16-cjs"],
};

const rewriteDistExportsPlugin: TsdownPlugin = {
  name: "rewrite-dist-exports",
  async tsdownConfig(config) {
    const wantAttw = !!config.attw;
    const wantPublint = !!config.publint;
    const attwConfig = typeof config.attw === "object" ? config.attw : {};
    const attwProfile = ((attwConfig as Record<string, unknown>).profile as string) ?? "esm-only";
    const attwIgnoreRules = ((attwConfig as Record<string, unknown>).ignoreRules as string[]) ?? [];
    if (!wantAttw && !wantPublint) return;

    const seen = new Set<string>();

    return {
      attw: false,
      publint: false,
      hooks: async (hooks) => {
        hooks.hook("build:done", async ({ options }) => {
          const { cwd, logger, nameLabel, outDir } = options;
          if (seen.has(outDir)) return;
          seen.add(outDir);

          const distPkg = path.join(outDir, "package.json");
          copyFileSync(path.join(cwd, "package.json"), distPkg);
          rewriteDistExports(distPkg);

          if (wantPublint) {
            const { publint } = await import("publint");
            const { formatMessage } = await import("publint/utils");
            const { messages, pkg } = await publint({ pkgDir: outDir, pack: false });
            for (const msg of messages) {
              const text = formatMessage(msg, pkg);
              if (msg.type === "error") logger.error(nameLabel, "[publint]", text);
              else logger.warn(nameLabel, "[publint]", text);
            }
          }

          if (wantAttw) {
            const { Package, checkPackage } = await import("@arethetypeswrong/core");
            const pkgJson = JSON.parse(readFileSync(path.join(outDir, "package.json"), "utf8")) as {
              name: string;
              version: string;
            };
            const files: Record<string, Uint8Array> = {};
            const readDir = (dir: string, prefix: string) => {
              for (const entry of readdirSync(dir)) {
                const full = path.join(dir, entry);
                const rel = `${prefix}/${entry}`;
                if (statSync(full).isDirectory()) readDir(full, rel);
                else
                  files[`/node_modules/${pkgJson.name}${rel}`] = new Uint8Array(readFileSync(full));
              }
            };
            readDir(outDir, "");
            const attwPkg = new Package(files, pkgJson.name, pkgJson.version);
            const result = await checkPackage(attwPkg);
            if (!result.types) {
              logger.warn(nameLabel, "[attw]", "Package has no types");
            } else {
              const ignoredModes = ATTW_PROFILES[attwProfile] ?? [];
              const problems = result.problems.filter((p) => {
                if (attwIgnoreRules.includes(p.kind)) return false;
                if ("resolutionKind" in p)
                  return !ignoredModes.includes((p as { resolutionKind: string }).resolutionKind);
                return true;
              });
              if (problems.length) {
                logger.warn(
                  nameLabel,
                  "[attw]",
                  `problems:\n${problems.map((p) => `  ${p.kind}`).join("\n")}`,
                );
              }
            }
          }
        });
      },
    };
  },
};

export { rewriteDistExportsPlugin };
