import type { Note, NoteGroup } from "../types";

function getNoteGroups(notes: Note[]): NoteGroup[] {
  const groups = new Map<string, NoteGroup>();

  for (const note of notes) {
    const existing = groups.get(note.title);
    if (existing) {
      existing.notes.push(note);
    } else {
      groups.set(note.title, { notes: [note], title: note.title });
    }
  }

  return [...groups.values()];
}

export { getNoteGroups };
