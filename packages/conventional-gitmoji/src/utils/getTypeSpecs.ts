import title from 'title'

import type { ReleaseRuleProps, ReleaseRuleTypes } from '../index'

const typeSpecs: Omit<ReleaseRuleProps, 'branch' | 'commit' | 'entity' | 'name'>[] =
  []

const getTypeSpecs = (types: ReleaseRuleTypes) => {
  Object.keys(types).map((type) => {
    typeSpecs.push({
      code: types[type].code,
      description: title(types[type].description.replace('.', '')),
      emoji: types[type].emoji,
      semver: types[type].semver,
      type: types[type].commit,
      value: types[type].commit,
    })
  })

  return typeSpecs
}

export default getTypeSpecs
