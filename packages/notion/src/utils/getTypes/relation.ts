import _map from 'lodash/map.js'

import getTypes from '../../utils/getTypes'

const relation = (data: any) => {
  // console.dir(` 🔗 RELATION:`)
  // console.dir(data.results)
  if (data.type === 'rollup') {
    // console.dir(` 🔗 RELATION: ROLLUP`)
    return (
      data.rollup.type === 'array' &&
      _map(data.rollup.array, (item: any) => {
        return getTypes[item.type](item)
      })[0]
    )
  } else {
    const dataRelation = _map(data.results, (d: any) => {
      return d?.relation?.id
    })
    return dataRelation
  }
}

export default relation
