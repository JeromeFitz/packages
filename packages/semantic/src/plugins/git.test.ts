import { describe, expect, it } from "vitest";

import { git } from "./git";

describe("git", () => {
  it("default: assets is [package.json] and message is the sr template", () => {
    expect(git({})).toMatchSnapshot();
  });

  describe("gitAssets", () => {
    it("false disables assets entirely", () => {
      const [, config] = git({ gitAssets: false }) as [string, Record<string, unknown>];
      expect(config.assets).toBe(false);
    });

    it("empty array keeps package.json", () => {
      const [, config] = git({ gitAssets: [] }) as [string, Record<string, unknown>];
      expect(config.assets).toEqual(["package.json"]);
    });

    it("string array is appended after package.json", () => {
      const [, config] = git({
        gitAssets: ["CHANGELOG.md", "dist/"],
      }) as [string, Record<string, unknown>];
      expect(config.assets).toEqual(["package.json", "CHANGELOG.md", "dist/"]);
    });
  });

  describe("message", () => {
    it("custom message overrides the default", () => {
      const [, config] = git({ message: "chore: release" }) as [string, Record<string, unknown>];
      expect(config.message).toBe("chore: release");
    });
  });
});
