/* eslint-disable prefer-const */
import _map from 'lodash/map.js'
import _omit from 'lodash/omit.js'

import { PROPERTIES } from '../schema'
import { dataNormalized, dataSorted, getImages } from '../utils'

const getNotionListing = async ({
  config,
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  getPagesById,
  pathVariables,
  routeType,
}) => {
  const { NOTION } = config
  let content: any = {},
    info: any = {},
    items: any = {}
  const dateTimestamp = new Date().toISOString()
  // @todo(date-fns) make this the first date of the year dynamically
  // const year = new Date().getFullYear.toString()
  // const dateTimestampBlog = new Date(`${year}-01-01`).toISOString()
  const dateTimestampBlog = new Date('2020-01-01').toISOString()
  const page_id = NOTION[routeType.toUpperCase()].page_id__seo
  const infoInit = await getPagesById({
    page_id,
  })
  // @refactor(404)
  if (!infoInit) {
    return {}
  }
  if (infoInit?.object === 'page') {
    info = _omit(infoInit, 'properties')
    info['properties'] = dataSorted(
      dataNormalized({ config, data: infoInit, pathVariables, pageId: info.id })
    )
  }

  content = await getBlocksByIdChildren({ block_id: info.id })
  const itemsInit: any = await getDatabasesByIdQuery({
    database_id: NOTION[routeType.toUpperCase()].database_id,
    filter: {
      and: [
        {
          property:
            routeType === NOTION.EVENTS.routeType
              ? PROPERTIES.dateEvent.notion
              : PROPERTIES.datePublished.notion,
          date: {
            on_or_after:
              routeType === NOTION.EVENTS.routeType
                ? dateTimestamp
                : dateTimestampBlog,
          },
        },
      ],
    },
  })
  const _itemData: any[] = []
  _map(itemsInit.results, (item) => {
    let itemInit = item
    itemInit = _omit(itemInit, 'properties')
    itemInit['properties'] = dataSorted(
      dataNormalized({ config, data: item, pathVariables, pageId: item.id })
    )
    _itemData.push(itemInit)
  })
  const _items = _omit(itemsInit, 'results')
  _items.results = _itemData
  items = _items

  let data = { info, content, items, images: {} }
  const images = !!data ? await getImages({ data, pathVariables }) : {}
  data = { ...data, images }

  return data
}

export default getNotionListing
