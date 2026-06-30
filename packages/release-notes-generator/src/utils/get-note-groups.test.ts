import { describe, expect, it } from "vitest";

import type { Note } from "../types";
import { getNoteGroups } from "./get-note-groups";

const note = (title: string, text: string, scope?: string): Note => ({
  scope,
  text,
  title,
});

describe("getNoteGroups", () => {
  it("returns empty array for no notes", () => {
    expect(getNoteGroups([])).toEqual([]);
  });

  it("groups notes by title", () => {
    const notes: Note[] = [
      note("BREAKING CHANGE", "first break"),
      note("BREAKING CHANGE", "second break"),
      note("DEPRECATED", "some deprecation"),
    ];
    const groups = getNoteGroups(notes);

    expect(groups).toHaveLength(2);
    expect(groups[0].title).toBe("BREAKING CHANGE");
    expect(groups[0].notes).toHaveLength(2);
    expect(groups[1].title).toBe("DEPRECATED");
    expect(groups[1].notes).toHaveLength(1);
  });

  it("preserves insertion order of groups", () => {
    const notes: Note[] = [note("Z-GROUP", "z note"), note("A-GROUP", "a note")];
    const groups = getNoteGroups(notes);
    expect(groups[0].title).toBe("Z-GROUP");
    expect(groups[1].title).toBe("A-GROUP");
  });

  it("preserves insertion order within a group", () => {
    const notes: Note[] = [
      note("BREAKING CHANGE", "first"),
      note("BREAKING CHANGE", "second"),
      note("BREAKING CHANGE", "third"),
    ];
    const [group] = getNoteGroups(notes);
    expect(group.notes.map((n) => n.text)).toEqual(["first", "second", "third"]);
  });

  it("passes all note fields through", () => {
    const notes: Note[] = [note("BREAKING CHANGE", "desc", "api")];
    const [group] = getNoteGroups(notes);
    expect(group.notes[0].scope).toBe("api");
  });
});
