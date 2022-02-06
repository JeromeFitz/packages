import title from 'title'

import type { TypesProps } from './index'

type TypeSpecsProps = {
  code: string
  description: string
  emoji: string
  semver: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  type: string
  value: string
}

const typeSpecs: TypeSpecsProps[] = []

const getTypeSpecs = (types: TypesProps) => {
  Object.keys(types).map((type) => {
    typeSpecs.push({
      code: types[type].code,
      // // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      // description:
      //   title(types[type].title || types[type].commit) +
      //   '\n##### ' +
      //   types[type].description,
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
