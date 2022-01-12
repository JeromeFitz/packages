import _map from 'lodash/map'

import { LOOKUP, PROPERTIES_LOOKUP } from '../schema'
import { getTypes } from '../utils'

const dataNormalized = ({ config, data, pathVariables, pageId }) => {
  const { NOTION } = config
  const DATA_NORMALIZED = {}
  if (!data?.properties) return DATA_NORMALIZED
  const { properties } = data

  // @hack(notion) not great
  let routeType
  if (!!pathVariables) {
    const { meta, routeType: _routeType } = pathVariables
    routeType =
      _routeType === NOTION?.PODCASTS?.routeType && meta.length > 1
        ? NOTION?.EPISODES?.routeType
        : _routeType
  }

  const items = !!routeType ? LOOKUP[routeType.toUpperCase()] : PROPERTIES_LOOKUP

  _map(items, (item) => {
    let dataToNormalize

    const dataFromNotion = properties[item.notion]
    /**
     * @note(notion)
     * ensure key populates in api
     * only populate w/ data if exists in notion
     */
    DATA_NORMALIZED[item.key] = null
    if (!!dataFromNotion) {
      dataToNormalize = getTypes[item.type](dataFromNotion, pageId)
      DATA_NORMALIZED[item.key] = !!dataToNormalize ? dataToNormalize : null
    }
  })

  return DATA_NORMALIZED
}

export default dataNormalized
