import commitTypes from '~ccommit/data/types.js'

const findBy = (str, from, to): string | undefined => {
  const key = commitTypes.findIndex((el) => el[from] === str)
  return commitTypes[key]?.[to]
}

export { findBy }
