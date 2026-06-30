import { describe, expect, it } from "vitest";

import getGitmojiConventional from "./get-gitmoji-conventional";
import getReleaseRules from "./get-release-rules";
import getTypeSpecs from "./get-type-specs";

/**
 * Characterization tests — lock current behavior before the purity refactor.
 *
 * WHY each builder is invoked exactly once: getReleaseRules / getTypeSpecs push
 * into module-level arrays (and getGitmojiConventional mutates a shared _types),
 * so a second call accumulates/duplicates results. That impurity is the refactor
 * target; until it is fixed, call once and assert against the stored value.
 */
describe("conventional-gitmoji mapping (characterization)", () => {
  const types = getGitmojiConventional();
  const releaseRules = getReleaseRules(types);
  const typeSpecs = getTypeSpecs(types);

  it("builds a sorted gitmoji → type table", () => {
    expect(types).toMatchSnapshot();
  });

  it("derives semantic-release releaseRules (emoji / code / commit fan-out)", () => {
    expect(releaseRules).toMatchSnapshot();
  });

  it("derives typeSpecs", () => {
    expect(typeSpecs).toMatchSnapshot();
  });

  it("emits only semver levels semantic-release accepts", () => {
    const valid = new Set([
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease",
    ]);
    for (const rule of releaseRules) {
      expect(valid.has(String(rule.release))).toBe(true);
    }
  });
});
