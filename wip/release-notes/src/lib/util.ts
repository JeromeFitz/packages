import conventionalCommitsFilter from 'conventional-commits-filter'
import _clone from 'lodash/clone'
import _cloneDeep from 'lodash/cloneDeep'
import _forEach from 'lodash/forEach'
import _get from 'lodash/get'
import _groupBy from 'lodash/groupBy'
import _isFunction from 'lodash/isFunction'
import _map from 'lodash/map'
import _merge from 'lodash/merge'
import _set from 'lodash/set'
import semver from 'semver'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCommitGroups(groupBy, commits, groupsSort, commitsSort) {
  const commitGroups: any = []
  const commitGroupsObj = _groupBy(commits, function (commit) {
    return commit[groupBy] || ''
  })

  _forEach(commitGroupsObj, function (commits, title: string | boolean) {
    if (title === '') {
      title = false
    }

    // if (commitsSort) {
    //   commits.sort(commitsSort)
    // }

    commitGroups.push({
      title: title,
      commits: commits,
    })
  })

  // if (groupsSort) {
  //   commitGroups.sort(groupsSort)
  // }

  return commitGroups
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getNoteGroups(notes, noteGroupsSort, notesSort) {
  const retGroups: any = []

  _forEach(notes, function (note) {
    const title = note.title
    let titleExists = false

    _forEach(retGroups, function (group) {
      if (group.title === title) {
        titleExists = true
        group.notes.push(note)
        return false
      }
      return
    })

    if (!titleExists) {
      retGroups.push({
        title: title,
        notes: [note],
      })
    }
  })

  // if (noteGroupsSort) {
  //   retGroups.sort(noteGroupsSort)
  // }

  // if (notesSort) {
  //   _forEach(retGroups, function (group) {
  //     group.notes.sort(notesSort)
  //   })
  // }

  return retGroups
}

function processCommit(chunk, transform, context) {
  let commit

  try {
    chunk = JSON.parse(chunk)
  } catch (e) {}

  commit = _cloneDeep(chunk)

  if (_isFunction(transform)) {
    commit = transform(commit, context)

    if (commit) {
      commit.raw = chunk
    }

    return commit
  }

  _forEach(transform, function (el, path) {
    let value = _get(commit, path)

    if (_isFunction(el)) {
      value = el(value, path)
    } else {
      value = el
    }

    _set(commit, path, value)
  })

  commit.raw = chunk

  return commit
}

function getExtraContext(commits, notes, options) {
  const context: any = {}

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

  context = _merge(
    {},
    context,
    keyCommit,
    getExtraContext(filteredCommits, notes, options)
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

const util = {
  processCommit,
  generate,
}

export default util
