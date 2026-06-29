import { describe, expect, it } from "vitest";

import changelog from "./index";
import recommendedBumpOpts from "./utils/conventionalRecommendedBump";
import parserOpts from "./utils/parserOpts";
import transformer from "./utils/transformer";
import writerOpts from "./utils/writerOpts";

/**
 * Characterization tests — lock the changelog pipeline's current behavior before
 * refactoring `transformer` (it mutates its input commit today; these snapshots
 * are the guard that the refactor preserves the output).
 */

describe("changelog: static opts", () => {
  it("parserOpts", () => {
    expect(parserOpts).toMatchSnapshot();
  });

  it("writerOpts (sans transform fn)", () => {
    const { transform, ...rest } = writerOpts;
    expect(rest).toMatchSnapshot();
    expect(typeof transform).toBe("function");
  });

  it("assembled changelog keys", () => {
    expect(Object.keys(changelog).sort()).toMatchSnapshot();
  });
});

describe("changelog: headerPattern parsing", () => {
  const headers = [
    "✨ (scope) add a feature",
    "feat: add a feature",
    "🐛 fix a bug",
    ":sparkles: shortcode subject",
  ];
  for (const header of headers) {
    it(`parses: ${header}`, () => {
      expect(header.match(parserOpts.headerPattern)?.slice(1)).toMatchSnapshot();
    });
  }
});

describe("changelog: transformer", () => {
  const make = (over: Record<string, unknown>) => ({
    hash: "1234567890abcdef",
    notes: [],
    scope: null,
    subject: "",
    type: null,
    ...over,
  });

  it("emoji-typed commit", () => {
    expect(transformer(make({ subject: "✨ add new feature", type: "✨" }), {})).toMatchSnapshot();
  });

  it("word-typed commit", () => {
    expect(transformer(make({ subject: "resolve the issue", type: "fix" }), {})).toMatchSnapshot();
  });

  it("unknown type returns undefined", () => {
    expect(transformer(make({ subject: "no match", type: "zzz-nope" }), {})).toBeUndefined();
  });
});

describe("changelog: recommendedBump.whatBump", () => {
  it("patch when no feat / breaking", () => {
    expect(recommendedBumpOpts.whatBump([{ notes: [], type: "fix" }])).toMatchSnapshot();
  });

  it("minor on feat (word)", () => {
    expect(recommendedBumpOpts.whatBump([{ notes: [], type: "feat" }])).toMatchSnapshot();
  });

  it("major on breaking note", () => {
    expect(
      recommendedBumpOpts.whatBump([
        { notes: [{ text: "x", title: "BREAKING CHANGE" }], type: "feat" },
      ]),
    ).toMatchSnapshot();
  });
});
