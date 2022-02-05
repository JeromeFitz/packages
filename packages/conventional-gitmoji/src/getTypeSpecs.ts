import title from 'title'

import type { TypesProps } from './index'

type TypeSpecsProps = {
  code: string
  emoji: string
  releaseNotes: boolean
  section: string
  semver: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  title: string
  type: string
  value: string
}

const typeSpecs: TypeSpecsProps[] = []

const getTypeSpecs = (types: TypesProps) => {
  Object.keys(types).map((type) => {
    typeSpecs.push({
      code: types[type].code,
      emoji: types[type].emoji,
      releaseNotes: types[type].releaseNotes || false,
      // // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      // section:
      //   title(types[type].title || types[type].commit) +
      //   '\n##### ' +
      //   types[type].section,
      section: title(types[type].section.replace('.', '')),
      semver: types[type].semver,
      title: title(types[type].title || types[type].commit),
      type: types[type].commit,
      value: types[type].commit,
    })
  })

  return typeSpecs
}

export default getTypeSpecs
