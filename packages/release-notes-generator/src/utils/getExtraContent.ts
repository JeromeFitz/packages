import getCommitGroups from './getCommitGroups.js'
import getNoteGroups from './getNoteGroups.js'

function getExtraContext(commits, notes, options) {
  const context: any = {}

  context.commitGroups = getCommitGroups(
    options.groupBy,
    commits,
    options.commitGroupsSort,
    options.commitsSort,
  )

  context.noteGroups = getNoteGroups(
    notes,
    options.noteGroupsSort,
    options.notesSort,
  )

  return context
}

export default getExtraContext
