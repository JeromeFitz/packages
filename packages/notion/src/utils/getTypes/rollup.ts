import _map from 'lodash/map.js'
import _sortBy from 'lodash/sortBy.js'

// import type { RollupFunction } from '../../schema'
import getTypes from '../../utils/getTypes'

/**
 * @note(notion) https://github.com/JeromeFitz/packages/issues/631
 */
// type Rollup = {
//   type: 'array'
//   array: any
//   function: RollupFunction
// }

// @todo(types)
const rollup = (data: any) => {
  const rollupData: any = data?.results
  return _sortBy(
    _map(rollupData, (item) => {
      /**
       * @hack(notion) dear evan hansen why
       */
      if (item?.type === 'title') {
        return item.title.plain_text
      }

      return getTypes[item?.type]({
        type: item?.type,
        [item?.type]: [item],
      })
    })
  ).flat()
}

export default rollup
