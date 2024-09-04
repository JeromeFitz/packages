import { filterRevertedCommitsSync } from 'conventional-commits-filter'
import _clone from 'lodash/clone.js'
import _forEach from 'lodash/forEach.js'
import _map from 'lodash/map.js'
import _merge from 'lodash/merge.js'
import { patch as semverPatch, valid as semverValid } from 'semver'

import getExtraContext from './getExtraContent.js'

function generate(options, commits, context, keyCommit) {
  let notes = []
  let filteredCommits

  if (options.ignoreReverted) {
    for (const commit of filterRevertedCommitsSync(commits)) {
      filteredCommits.push(commit)
    }
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

  if (context.version && semverValid(context.version)) {
    context.isPatch = context.isPatch || semverPatch(context.version) !== 0
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
    commits,
    context,
    filteredCommits,
    keyCommit,
    options,
  }

  return context
}

export default generate
