import getCommitGroups from './getCommitGroups'
import getNoteGroups from './getNoteGroups'

function getExtraContext(commits, notes, options) {
  const context: any = {}

  // console.dir(`> getExtraContext`)
  // console.dir(options)

  // group `commits` by `options.groupBy`
  context.commitGroups = getCommitGroups(
    options.groupBy,
    commits,
    options.commitGroupsSort,
    options.commitsSort
  )

  // group `notes` for footer
  context.noteGroups = getNoteGroups(
    notes,
    options.noteGroupsSort,
    options.notesSort
  )

  return context
}

export default getExtraContext
