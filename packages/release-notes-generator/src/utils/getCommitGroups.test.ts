import { describe, expect, it } from "vitest";

import type { TransformedCommit } from "../types";
import { getCommitGroups } from "./getCommitGroups";

function makeCommit(overrides: Partial<TransformedCommit> = {}): TransformedCommit {
  return {
    author: { email: "test@example.com", name: "Test" },
    body: null,
    footer: null,
    hash: "abc1234",
    header: "✨ feat: add thing",
    mentions: [],
    merge: null,
    message: "✨ feat: add thing",
    notes: [],
    references: [],
    revert: null,
    scope: null,
    subject: "add thing",
    type: "✨  Add New Feature",
    typeSpec: {
      code: ":sparkles:",
      description: "Add New Feature",
      emoji: "✨",
      semver: "minor",
      type: "feat",
      value: "feat",
    },
    typeSpecIndex: 0,
    ...overrides,
  };
}

const featCommit = makeCommit();
const fixCommit = makeCommit({
  hash: "def5678",
  type: "🐛  Fix A Bug",
  typeSpec: {
    code: ":bug:",
    description: "Fix A Bug",
    emoji: "🐛",
    semver: "fix",
    type: "fix",
    value: "fix",
  },
  typeSpecIndex: 1,
});
const breakingCommit = makeCommit({
  hash: "ghi9012",
  type: "💥  Introduce Breaking Changes",
  typeSpec: {
    code: ":boom:",
    description: "Introduce Breaking Changes",
    emoji: "💥",
    semver: "breaking",
    type: "breaking",
    value: "breaking",
  },
  typeSpecIndex: 2,
});

describe("getCommitGroups", () => {
  it("returns empty array for no commits", () => {
    expect(getCommitGroups("type", [], [], [])).toEqual([]);
  });

  it("groups commits by the groupBy field", () => {
    const commits = [featCommit, fixCommit];
    const groups = getCommitGroups("type", commits, [], []);
    expect(groups).toHaveLength(2);
    const types = groups.map((g) => g.title);
    expect(types).toContain("✨  Add New Feature");
    expect(types).toContain("🐛  Fix A Bug");
  });

  it("assigns order 0 to breaking/major commits", () => {
    const groups = getCommitGroups("type", [breakingCommit], [], []);
    expect(groups[0].order).toBe(0);
  });

  it("assigns order 10 to feature/minor commits", () => {
    const groups = getCommitGroups("type", [featCommit], [], []);
    expect(groups[0].order).toBe(10);
  });

  it("assigns order 20 to fix/patch commits", () => {
    const groups = getCommitGroups("type", [fixCommit], [], []);
    expect(groups[0].order).toBe(20);
  });

  it("assigns order 99 to unknown semver", () => {
    const unknown = makeCommit({
      typeSpec: { ...featCommit.typeSpec, semver: null },
    });
    const groups = getCommitGroups("type", [unknown], [], []);
    expect(groups[0].order).toBe(99);
  });

  it("sorts groups when commitGroupsSort is provided", () => {
    const commits = [featCommit, breakingCommit, fixCommit];
    const groups = getCommitGroups("type", commits, ["order"], []);
    expect(groups[0].order).toBe(0);
    expect(groups[1].order).toBe(10);
    expect(groups[2].order).toBe(20);
  });

  it("sorts commits within groups when commitsSort is provided", () => {
    const a = makeCommit({ hash: "aaa", scope: "z-scope", subject: "z" });
    const b = makeCommit({ hash: "bbb", scope: "a-scope", subject: "a" });
    const groups = getCommitGroups("type", [a, b], [], ["scope"]);
    expect(groups[0].commits[0].scope).toBe("a-scope");
    expect(groups[0].commits[1].scope).toBe("z-scope");
  });

  it("sets title to false when groupBy value is empty string", () => {
    const noType = makeCommit({ type: "" });
    const groups = getCommitGroups("type", [noType], [], []);
    expect(groups[0].title).toBe(false);
  });
});
