import { asyncForEach, noop as _noop } from '@jeromefitz/utils'
// import _map from 'lodash/map.js'

import { LOOKUP, PROPERTIES_LOOKUP } from '../../constants'
import { getTypes } from '../../utils'

/**
 * @todo(notion)
 *
 * Refactor to remove `config` as a parameter, or move this to `queries`
 */
const dataNormalized = async ({
  config,
  data,
  getPagePropertyItem,
  pathVariables,
  pageId,
}) => {
  const { NOTION } = config
  const DATA_NORMALIZED = {}
  if (!data?.properties) return DATA_NORMALIZED
  const { properties } = data

  // @hack(notion) not great
  let routeType = ''
  if (!!pathVariables) {
    const { meta, routeType: _routeType } = pathVariables
    routeType =
      _routeType === NOTION?.PODCASTS?.routeType && meta.length > 1
        ? NOTION?.EPISODES?.routeType
        : _routeType
  }

  const items = !!routeType ? LOOKUP[routeType.toUpperCase()] : PROPERTIES_LOOKUP

  await asyncForEach(items, async (item: any) => {
    let dataToNormalize: any

    const dataFromNotion = properties[item.notion]
    /**
     * @note(notion)
     * ensure key populates in api
     * only populate w/ data if exists in notion
     */
    DATA_NORMALIZED[item.key] = null
    if (!!dataFromNotion) {
      // console.dir(`>> `)
      // console.dir(`item.type: ${item.type} (${pageId} / ${item.notion})`)
      const foo = await getPagePropertyItem({
        getPagePropertyItemRetrive: getPagePropertyItem,
        page_id: pageId,
        property_id: dataFromNotion.id,
      })
      // console.dir(`>>> foo: getPagePropertyItem (${dataFromNotion.id})`)
      dataToNormalize = getTypes[item.type](foo, pageId)
      DATA_NORMALIZED[item.key] = !!dataToNormalize ? dataToNormalize : null
    }
  }).catch(_noop)

  return DATA_NORMALIZED
}

export default dataNormalized
