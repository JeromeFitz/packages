import { describe, expect, it } from "vitest";

import type { MarkdownContext, RenderMeta } from "../types";
import { header } from "./header";

const baseMeta: RenderMeta = {
  repositoryUrl: "https://github.com/owner/repo",
};

function makeContext(overrides: Partial<MarkdownContext> = {}): MarkdownContext {
  return {
    commit: "commit",
    commitGroups: [],
    currentTag: "v1.0.0",
    host: "https://github.com",
    issue: "issues",
    linkCompare: false,
    noteGroups: [],
    owner: "owner",
    previousTag: "v0.9.0",
    repository: "repo",
    version: "1.0.0",
    ...overrides,
  };
}

describe("header template", () => {
  it("always includes the current tag", () => {
    const result = header(makeContext({ currentTag: "v2.0.0" }), [], baseMeta);
    expect(result).toContain("`v2.0.0`");
  });

  it("includes compare link when linkCompare is true", () => {
    const result = header(
      makeContext({
        currentTag: "v1.0.0",
        linkCompare: true,
        previousTag: "v0.9.0",
      }),
      [],
      baseMeta,
    );
    expect(result).toContain("compare/v0.9.0...v1.0.0");
    expect(result).toContain("`v0.9.0`");
  });

  it("omits compare link when linkCompare is false", () => {
    const result = header(makeContext({ linkCompare: false }), [], baseMeta);
    expect(result).not.toContain("compare/");
    expect(result).not.toContain("Previous");
  });

  it("includes title when provided", () => {
    const result = header(makeContext({ title: "My Release" }), [], baseMeta);
    expect(result).toContain("My Release");
    expect(result).toContain("Title");
  });

  it("omits title row when title is not set", () => {
    const result = header(makeContext(), [], baseMeta);
    expect(result).not.toContain("Title");
  });

  it("includes formatted date when date is provided", () => {
    // Use noon UTC to avoid timezone-dependent day shifts
    const result = header(makeContext({ date: "2024-06-15T12:00:00.000Z" }), [], baseMeta);
    expect(result).toContain("2024-06-15");
    expect(result).toContain("Date");
  });

  it("omits date row when date is not set", () => {
    const result = header(makeContext({ date: undefined }), [], baseMeta);
    expect(result).not.toContain("Date");
  });

  it("matches snapshot", () => {
    const result = header(
      makeContext({
        date: "2024-06-15T12:00:00.000Z",
        linkCompare: true,
        title: "Stable",
      }),
      [],
      baseMeta,
    );
    expect(result).toMatchSnapshot();
  });
});
