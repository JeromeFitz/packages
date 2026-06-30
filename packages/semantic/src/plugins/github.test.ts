import { describe, expect, it } from "vitest";

import { github } from "./github";

describe("github", () => {
  it("default output snapshot", () => {
    expect(github()).toMatchSnapshot();
  });

  describe("defaults are always set", () => {
    it("addReleases is false by default", () => {
      const [, config] = github() as [string, Record<string, unknown>];
      expect(config.addReleases).toBe(false);
    });

    it("labels is false by default", () => {
      const [, config] = github() as [string, Record<string, unknown>];
      expect(config.labels).toBe(false);
    });

    it("releasedLabels is false by default", () => {
      const [, config] = github() as [string, Record<string, unknown>];
      expect(config.releasedLabels).toBe(false);
    });

    it("successComment is false by default", () => {
      const [, config] = github() as [string, Record<string, unknown>];
      expect(config.successComment).toBe(false);
    });
  });

  describe("config overrides", () => {
    it("addReleases can be enabled", () => {
      const [, config] = github({ addReleases: true }) as [string, Record<string, unknown>];
      expect(config.addReleases).toBe(true);
    });

    it("githubAssets maps to assets", () => {
      const [, config] = github({
        githubAssets: ["dist.zip", "dist.tar.gz"],
      }) as [string, Record<string, unknown>];
      expect(config.assets).toEqual(["dist.zip", "dist.tar.gz"]);
    });

    it("githubUrl is passed through", () => {
      const [, config] = github({
        githubUrl: "https://enterprise.example.com",
      }) as [string, Record<string, unknown>];
      expect(config.githubUrl).toBe("https://enterprise.example.com");
    });
  });
});
