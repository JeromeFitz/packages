import _map from 'lodash/map.js'
import _sortBy from 'lodash/sortBy.js'

import type { RollupFunction } from '../../schema/index.js'
import getTypes from '../../utils/getTypes/index.js'

/**
 * @note(notion) https://github.com/JeromeFitz/packages/issues/631
 */
type Rollup = {
  type: 'array'
  array: any
  function: RollupFunction
}

// @todo(types)
const rollup = (data: any) => {
  const rollupData: Rollup = data?.rollup
  return _sortBy(
    _map(rollupData?.array, (item) =>
      _map(item[item?.type], (itemData) =>
        getTypes[item?.type]({
          type: item?.type,
          [item?.type]: [itemData],
        }),
      ),
    ),
  ).flat()
}

export default rollup
