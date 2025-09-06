import type { IReleaseRule, IReleaseRuleProps } from '../index.js'

import title from 'title'

const typeSpecs: Omit<IReleaseRuleProps, 'branch' | 'commit' | 'entity' | 'name'>[] =
  []

const getTypeSpecs = (types: IReleaseRule) => {
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
