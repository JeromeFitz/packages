import _cloneDeep from 'lodash/cloneDeep'
import _forEach from 'lodash/forEach'
import _get from 'lodash/get'
import _isFunction from 'lodash/isFunction'
import _set from 'lodash/set'

/**
 * @ref lifted from release-notes-generator
 */
function processCommit(chunk, transform, context) {
  let commit: any

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

export { processCommit }
