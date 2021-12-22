import title from 'title'

const getTypeSpecs = (types) => {
  const typeSpecs = []

  Object.keys(types).map((type) => {
    typeSpecs.push({
      code: types[type].code,
      emoji: types[type].emoji,
      releaseNotes: types[type].releaseNotes || false,
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      section: title(types[type].commit) + '\n#### ' + types[type].section,
      semver: types[type].semver,
      type: types[type].commit,
      value: types[type].commit,
    })
  })

  return typeSpecs
}

export default getTypeSpecs
