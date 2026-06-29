import { describe, expect, it } from "vitest";

import { npm } from "./npm";

describe("npm", () => {
  describe("returns bare string when no config is needed", () => {
    it("no argument", () => {
      expect(npm()).toBe("@semantic-release/npm");
    });

    it("empty options object", () => {
      expect(npm({})).toBe("@semantic-release/npm");
    });

    it("all options explicitly undefined", () => {
      expect(npm({ npmPublish: undefined, pkgRoot: undefined, tarballDir: undefined })).toBe(
        "@semantic-release/npm",
      );
    });
  });

  describe("returns tuple when any option is set", () => {
    it("pkgRoot string", () => {
      const result = npm({ pkgRoot: "./dist" });
      expect(Array.isArray(result)).toBe(true);
      expect(result).toMatchSnapshot();
    });

    it("npmPublish boolean", () => {
      expect(Array.isArray(npm({ npmPublish: false }))).toBe(true);
      expect(Array.isArray(npm({ npmPublish: true }))).toBe(true);
    });

    it("tarballDir string", () => {
      expect(Array.isArray(npm({ tarballDir: "release" }))).toBe(true);
    });

    it("tarballDir false (explicit disable)", () => {
      expect(Array.isArray(npm({ tarballDir: false }))).toBe(true);
    });

    it("all options set", () => {
      const result = npm({
        npmPublish: true,
        pkgRoot: "./dist",
        tarballDir: "release",
      });
      expect(result).toMatchSnapshot();
    });
  });
});
