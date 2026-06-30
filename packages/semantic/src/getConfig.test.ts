// oxlint-disable no-template-curly-in-string
import type { PluginSpec } from "semantic-release";
import { describe, expect, it } from "vitest";

import { getConfig } from "./getConfig";

const pluginName = (p: PluginSpec): string => (Array.isArray(p) ? String(p[0]) : String(p));

describe("getConfig", () => {
  it("default config snapshot", () => {
    expect(getConfig()).toMatchSnapshot();
  });

  describe("default values", () => {
    it("branches default to main + canary prerelease", () => {
      expect(getConfig().branches).toEqual([
        { name: "main" },
        { name: "canary", prerelease: "canary" },
      ]);
    });

    it("extends semantic-release-commit-filter by default", () => {
      expect(getConfig().extends).toEqual(["semantic-release-commit-filter"]);
    });

    it("tagFormat defaults to v${version}", () => {
      expect(getConfig().tagFormat).toBe("v${version}");
    });

    it("plugins is always an array", () => {
      expect(Array.isArray(getConfig().plugins)).toBe(true);
    });
  });

  describe("overrides", () => {
    it("branches can be replaced", () => {
      const config = getConfig({ branches: [{ name: "main" }] });
      expect(config.branches).toEqual([{ name: "main" }]);
    });

    it("tagFormat can be replaced", () => {
      const config = getConfig({ tagFormat: "pkg@${version}" });
      expect(config.tagFormat).toBe("pkg@${version}");
    });

    it("extends can be replaced", () => {
      const config = getConfig({ extends: ["my-sr-config"] });
      expect(config.extends).toEqual(["my-sr-config"]);
    });
  });

  describe("plugin assembly respects enable flags", () => {
    it("enableNpm: false removes npm plugin", () => {
      const names = getConfig({ enableNpm: false }).plugins?.map(pluginName) ?? [];
      expect(names).not.toContain("@semantic-release/npm");
    });

    it("enableGit: true adds git plugin", () => {
      const names = getConfig({ enableGit: true }).plugins?.map(pluginName) ?? [];
      expect(names).toContain("@semantic-release/git");
    });

    it("enableGithub: false removes github plugin", () => {
      const names = getConfig({ enableGithub: false }).plugins?.map(pluginName) ?? [];
      expect(names).not.toContain("@semantic-release/github");
    });
  });
});
