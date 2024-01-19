/* eslint-disable @typescript-eslint/no-unused-vars */
import _forEach from 'lodash/forEach.js'
import _orderBy from 'lodash/orderBy.js'

function getNoteGroups(notes, noteGroupsSort, notesSort) {
  const noteGroups: any = []

  // console.dir(`> getNoteGroups`)
  // console.dir(notes)
  _forEach(notes, function (note) {
    // console.dir(`> _forEach`)
    // console.dir(note)
    const title = note.title
    let titleExists = false

    _forEach(noteGroups, function (group) {
      if (group.title === title) {
        titleExists = true
        group.notes.push(note)
        return false
      }
      return
    })

    if (!titleExists) {
      noteGroups.push({
        title: title,
        notes: [note],
      })
    }
  })

  // // noteGroupsSort: 'title'
  // if (noteGroupsSort) {
  //   console.dir(`>>> noteGroupsSort`)
  //   console.dir(noteGroupsSort)
  //   noteGroups = _orderBy(noteGroups, noteGroupsSort)
  //   // noteGroups.sort(noteGroupsSort)
  // }

  // if (notesSort) {
  //   console.dir(`>>> notesSort`)
  //   console.dir(notesSort)
  //   _forEach(noteGroups, function (group) {
  //     noteGroups[group] = _orderBy(group, notesSort)
  //     // group.notes.sort(notesSort)
  //   })
  // }

  return noteGroups
}

export default getNoteGroups
