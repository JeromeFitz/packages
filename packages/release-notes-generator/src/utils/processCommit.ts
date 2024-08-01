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
    // @todo(NICE-129) eslint
    // eslint-disable-next-line no-empty, @typescript-eslint/no-unused-vars
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
