/* eslint-disable prefer-const */
import { sortObject } from '@jeromefitz/utils'
import _map from 'lodash/map.js'
import _omit from 'lodash/omit.js'
import _size from 'lodash/size.js'

import { PROPERTIES, QUERIES } from '../../constants'
import { addTime, dataNormalized } from '../../utils'

// @todo(complexity) 16
// eslint-disable-next-line complexity
const getNotionListingByDate = async ({
  config,
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  getPagesById,
  pathVariables,
  routeType,
  slug,
}) => {
  const { NOTION } = config
  const { meta } = pathVariables
  let content: any = {},
    info: any = {},
    items: any = {}
  const dateTimestamp = new Date().toISOString()

  const page_id = NOTION[routeType.toUpperCase()].page_id__seo
  const info3 = await getPagesById({
    page_id,
  })
  // const info3a = info3.object === 'page' && normalizerContent(info3)
  if (info3.object === 'page') {
    info = _omit(info3, 'properties')
    info['properties'] = sortObject(
      dataNormalized({ config, data: info3, pathVariables, pageId: info.id })
    )
  }

  content = await getBlocksByIdChildren({ block_id: info.id })
  /**
   * @filter
   * @note events|blog only for now
   */
  const metaCount = _size(meta)
  const [year3, month3, day3] = meta
  const timestampQuery3 = new Date(
    `${!!year3 ? year3 : dateTimestamp.slice(0, 4)}-${!!month3 ? month3 : '01'}-${
      !!day3 ? day3 : '01'
    }`
  )
  let filter
  const sorts3 = [
    {
      property: PROPERTIES.datePublished.notion,
      direction: 'descending',
    },
  ]

  switch (metaCount) {
    case 1:
      filter = {
        and: [
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              on_or_after: addTime(timestampQuery3, ''),
            },
          },
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              before: addTime(timestampQuery3, 'year'),
            },
          },
        ],
      }
      break
    case 2:
      filter = {
        and: [
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              on_or_after: addTime(timestampQuery3, ''),
            },
          },
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              before: addTime(timestampQuery3, 'month'),
            },
          },
        ],
      }
      break
    case 3:
      filter = {
        and: [
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              on_or_after: addTime(timestampQuery3, ''),
            },
          },
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              before: addTime(timestampQuery3, 'day'),
            },
          },
        ],
      }
      break
    default:
      filter = {
        and: [
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              on_or_after: addTime(timestampQuery3, ''),
            },
          },
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              before: addTime(timestampQuery3, 'day'),
            },
          },
          {
            ...QUERIES.slug,
            text: { equals: slug },
          },
        ],
      }
      break
  }
  const database_id = NOTION[routeType.toUpperCase()].database_id
  const items3: any = await getDatabasesByIdQuery({
    database_id,
    filter,
    sorts: sorts3,
  })
  const items3Data: any[] = []
  // _map(items3.results, (item) => (items3Data[item.id] = normalizerContent(item)))
  // const items3Omit = _omit(items3, 'results')
  // items3Omit.results = items3Data
  _map(items3.results, (item) => {
    let item2 = item
    item2 = _omit(item2, 'properties')
    item2['properties'] = sortObject(
      dataNormalized({ config, data: item, pathVariables, pageId: item.id })
    )
    // items3Data[item.id] = item2
    !!item2 && items3Data.push(item2)
  })
  const items3Omit = _omit(items3, 'results')
  items3Omit.results = items3Data
  items = items3Omit

  // eslint-disable-next-line prefer-const
  items = _omit(items3Omit, 'data')

  let data = { info, content, items, images: {} }
  // @todo(images)
  let images = {}
  data = { ...data, images }

  return data
}

export default getNotionListingByDate
