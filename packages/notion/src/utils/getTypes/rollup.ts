import _map from 'lodash/map.js'
import _sortBy from 'lodash/sortBy.js'

import getTypes from '../../utils/getTypes'

const rollup = (data: any) => {
  return _sortBy(_map(data?.rollup?.array, (item) => getTypes[item.type](item)))
}

export default rollup
