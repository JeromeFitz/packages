import _find from 'lodash/find.js'

import commitTypes from '~ccommit/data/types'

const findBy = (str, from, to): string | undefined => {
  const found = _find(commitTypes, (el) => el[from] === str)
  return found?.[to]
}

export { findBy }
