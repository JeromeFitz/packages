import { describe, expect, it } from "vitest";

import type { ParsedCommit, TransformedCommit } from "../types";
import { processCommit } from "./process-commit";

const baseCommit: ParsedCommit = {
  author: { email: "test@example.com", name: "Test User" },
  body: null,
  committerDate: "2024-01-15",
  footer: null,
  hash: "abc1234",
  header: "✨ (feat): add feature",
  mentions: [],
  merge: null,
  message: "✨ (feat): add feature",
  notes: [],
  references: [],
  revert: null,
  scope: "feat",
  subject: "add feature",
  type: "✨",
};

const typeSpec = {
  code: ":sparkles:",
  description: "Add New Feature",
  emoji: "✨",
  semver: "minor" as const,
  type: "feat",
  value: "feat",
};

describe("processCommit", () => {
  describe("function transform", () => {
    it("calls the transform function and attaches raw", () => {
      const transform = (commit: ParsedCommit): TransformedCommit => ({
        ...commit,
        hash: commit.hash ?? "",
        type: "✨  Add New Feature",
        typeSpec,
        typeSpecIndex: 0,
      });

      const result = processCommit(baseCommit, transform, {});

      expect(result).toBeDefined();
      expect(result?.type).toBe("✨  Add New Feature");
      expect(result?.typeSpec).toEqual(typeSpec);
      expect(result?.raw).toEqual(baseCommit);
    });

    it("returns undefined when transform returns undefined", () => {
      const transform = () => undefined;
      const result = processCommit(baseCommit, transform, {});
      expect(result).toBeUndefined();
    });

    it("does not attach raw when transform returns undefined", () => {
      const received: unknown[] = [];
      const transform = (commit: ParsedCommit) => {
        received.push(commit);
        return undefined;
      };
      processCommit(baseCommit, transform, {});
      expect(received).toHaveLength(1);
    });

    it("clones the chunk before passing to transform", () => {
      let received: ParsedCommit | undefined;
      const transform = (commit: ParsedCommit): TransformedCommit => {
        received = commit;
        return {
          ...commit,
          hash: commit.hash ?? "",
          type: "x",
          typeSpec,
          typeSpecIndex: 0,
        };
      };
      processCommit(baseCommit, transform, {});
      expect(received).not.toBe(baseCommit);
      expect(received).toEqual(baseCommit);
    });

    it("passes context to the transform function", () => {
      const ctx = { repositoryUrl: "https://github.com/owner/repo" };
      let receivedCtx: unknown;
      const transform = (_commit: ParsedCommit, context: unknown): TransformedCommit => {
        receivedCtx = context;
        return {
          ..._commit,
          hash: _commit.hash ?? "",
          type: "x",
          typeSpec,
          typeSpecIndex: 0,
        };
      };
      processCommit(baseCommit, transform, ctx);
      expect(receivedCtx).toBe(ctx);
    });
  });

  describe("object transform", () => {
    it("applies static value replacements via path", () => {
      const transform = { type: "overridden" };
      const result = processCommit(baseCommit, transform, {});
      expect(result?.type).toBe("overridden");
    });

    it("applies function replacements via path", () => {
      const transform = { type: (v: unknown) => `${v}-modified` };
      const result = processCommit(baseCommit, transform, {});
      expect(result?.type).toBe("✨-modified");
    });

    it("attaches raw to the result", () => {
      const transform = { type: "x" };
      const result = processCommit(baseCommit, transform, {});
      expect(result?.raw).toEqual(baseCommit);
    });
  });
});
