import conventionalCommitsFilter from 'conventional-commits-filter'
import _clone from 'lodash/clone'
import _forEach from 'lodash/forEach'
import _map from 'lodash/map'
import _merge from 'lodash/merge.js'
import semver from 'semver'

import getExtraContext from './getExtraContent'

function generate(options, commits, context, keyCommit) {
  let notes = []
  let filteredCommits

  if (options.ignoreReverted) {
    filteredCommits = conventionalCommitsFilter(commits)
  } else {
    filteredCommits = _clone(commits)
  }

  _forEach(filteredCommits, function (commit) {
    _map(commit.notes, function (note) {
      note.commit = commit

      return note
    })

    notes = notes.concat(commit.notes)
  })
  // console.dir(`notes:`)
  // console.dir(notes)

  context = _merge(
    {},
    context,
    keyCommit,
    getExtraContext(filteredCommits, notes, options),
  )

  if (keyCommit && keyCommit.committerDate) {
    context.date = keyCommit.committerDate
  }

  if (context.version && semver.valid(context.version)) {
    context.isPatch = context.isPatch || semver.patch(context.version) !== 0
  }

  // @note this is/was a pass-through function, okay with "skipping"
  // context = options.finalizeContext(
  //   context,
  //   options,
  //   filteredCommits,
  //   keyCommit,
  //   commits
  // )

  // @question should this be merge/extend? i.e, `...context` specifically?
  context = {
    context,
    options,
    filteredCommits,
    keyCommit,
    commits,
  }

  return context
}

export default generate
