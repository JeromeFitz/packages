import commitTypes from '~ccommit/data/types'

const findBy = (str, from, to): string | undefined => {
  const key = commitTypes.findIndex((el) => el[from] === str)
  return commitTypes[key]?.[to]
}

export { findBy }
