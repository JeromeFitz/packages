import _cloneDeep from 'lodash/cloneDeep.js'
import _forEach from 'lodash/forEach.js'
import _get from 'lodash/get.js'
import _isFunction from 'lodash/isFunction.js'
import _set from 'lodash/set.js'

/**
 * @ref lifted from release-notes-generator
 */
function processCommit(chunk, transform, context) {
  let commit: any

  try {
    chunk = JSON.parse(chunk)
    // biome-ignore lint/suspicious/noEmptyBlockStatements: migrate
  } catch (_error) {}

  commit = _cloneDeep(chunk)

  if (_isFunction(transform)) {
    commit = transform(commit, context)

    if (commit) {
      commit.raw = chunk
    }

    return commit
  }

  _forEach(transform, (el, path) => {
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
