import _map from 'lodash/map'

import getTypes from '../../utils/getTypes'

const relation = (data: any) => {
  if (data.type === 'rollup') {
    return (
      data.rollup.type === 'array' &&
      _map(data.rollup.array, (item: any) => {
        return getTypes[item.type](item)
      })[0]
    )
  } else {
    return _map(data.relation, (relation: any) => relation.id)
  }
}

export default relation
