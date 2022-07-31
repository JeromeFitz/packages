// import { sortObject } from '@jeromefitz/utils'
// import _filter from 'lodash/filter.js'
// import _map from 'lodash/map.js'
import _omit from 'lodash/omit.js'

import { QUERIES } from '../../constants'
// import { dataNormalized, getTypes } from '../../utils'
import { dataNormalized } from '../../utils'

const getNotionSlug = async ({
  config,
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  getDeepFetchAllChildren,
  getPagePropertyItem,
  pathVariables,
  routeType,
  slug,
}) => {
  const { NOTION } = config

  const DB_TYPE = routeType?.toUpperCase()
  const isValid = Object.keys(NOTION).includes(DB_TYPE)

  if (!isValid) return { info: {}, content: {}, items: {}, images: {} }

  const __info: any = await getDatabasesByIdQuery({
    database_id: NOTION[DB_TYPE].database_id,
    filter: {
      and: [
        {
          ...QUERIES.slug,
          rich_text: { equals: slug },
        },
      ],
    },
  })

  const _info = __info?.object === 'list' && __info.results[0]
  // @refactor(404)
  if (!_info) {
    return {}
  }

  console.dir(`📦️ [@jeromefitz/notion] => 00`)
  // console.dir(_info.properties)

  const info = _omit(_info, 'properties')

  // const DATA_NORMALIZED = {}
  // _map(_info.properties, async (item) => {
  //   const dataFromNotion = _info.properties[item.id]
  //   console.dir(item)
  //   console.dir(`dataFromNotion: ${!!dataFromNotion} (${item.id})`)
  //   DATA_NORMALIZED[item.key] = null
  //   if (!!dataFromNotion) {
  //     console.dir(`>> `)
  //     // let dataToNormalize: any
  //     const foo = await getPagePropertyItem({
  //       getPagePropertyItemRetrive: getPagePropertyItem,
  //       page_id: info.id,
  //       property_id: dataFromNotion.id,
  //     })
  //     console.dir(`>>> foo`)
  //     console.dir(foo)
  //     const dataToNormalize = getTypes[item.type](dataFromNotion, info.id)
  //     console.dir(`>>> dataToNormalize`)
  //     console.dir(dataToNormalize)
  //     DATA_NORMALIZED[item.key] = !!dataToNormalize ? dataToNormalize : null
  //   }
  // })
  // info['properties'] = DATA_NORMALIZED
  // info['properties'] = sortObject(
  //   dataNormalized({
  //     config,
  //     data: _info,
  //     pathVariables,
  //     getPagePropertyItem,
  //     pageId: info.id,
  //   })
  // )
  const foo = await dataNormalized({
    config,
    data: _info,
    pathVariables,
    getPagePropertyItem,
    pageId: info.id,
  })
  // console.dir(foo)
  info['properties'] = foo

  console.dir(`📦️ [@jeromefitz/notion] => 01`)
  // console.dir(info)

  const _content = await getBlocksByIdChildren({ block_id: info.id })
  const blocks = [...(await getDeepFetchAllChildren({ blocks: _content.results }))]
  const content = blocks

  /**
   * @question if this is reached, there are no `items`
   */
  // const items: any = {}
  // items.results = _filter(items?.results, { properties: { isPublished: true } })

  /**
   * @note(plaiceholder)
   *
   * Pass empty `images` object for SSR/API takeover
   */
  const dataReturn = { info, content, items: {}, images: {} }
  // console.dir(`> dataReturn`)
  // console.dir(dataReturn)
  return dataReturn
}

export default getNotionSlug
