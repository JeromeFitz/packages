import {
  cloneDeep as _cloneDeep,
  forEach as _forEach,
  get as _get,
  isFunction as _isFunction,
  set as _set,
} from 'lodash-es'

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
