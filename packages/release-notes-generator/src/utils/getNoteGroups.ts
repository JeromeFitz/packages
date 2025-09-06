import _forEach from 'lodash/forEach.js'

function getNoteGroups(notes, _noteGroupsSort, _notesSort) {
  const noteGroups: any = []

  // console.dir(`> getNoteGroups`)
  // console.dir(notes)
  _forEach(notes, (note) => {
    // console.dir(`> _forEach`)
    // console.dir(note)
    const title = note.title
    let titleExists = false

    _forEach(noteGroups, (group) => {
      if (group.title === title) {
        titleExists = true
        group.notes.push(note)
        return false
      }
      return
    })

    if (!titleExists) {
      noteGroups.push({
        notes: [note],
        title: title,
      })
    }
  })

  return noteGroups
}

export default getNoteGroups
