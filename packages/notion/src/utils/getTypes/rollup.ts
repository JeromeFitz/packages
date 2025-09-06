import type { RollupFunction } from '../../schema/index.js'

import _map from 'lodash/map.js'
import _sortBy from 'lodash/sortBy.js'

import getTypes from '../../utils/getTypes/index.js'

/**
 * @note(notion) https://github.com/JeromeFitz/packages/issues/631
 */

// biome-ignore lint/nursery/useConsistentTypeDefinitions: migrate
type Rollup = {
  array: any
  function: RollupFunction
  type: 'array'
}

// @todo(types)
const rollup = (data: any) => {
  const rollupData: Rollup = data?.rollup
  return _sortBy(
    _map(rollupData?.array, (item) =>
      _map(item[item?.type], (itemData) =>
        getTypes[item?.type]({
          [item?.type]: [itemData],
          type: item?.type,
        }),
      ),
    ),
  ).flat()
}

export default rollup
