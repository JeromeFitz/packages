// @todo(NICE-129) eslint
/* eslint-disable no-extra-boolean-cast */
import { sortObject } from '@jeromefitz/utils'

import _map from 'lodash/map.js'
import _omit from 'lodash/omit.js'
import _size from 'lodash/size.js'

import type { SortItem } from '../../schema/index.js'

import { PROPERTIES, QUERIES } from '../../constants/index.js'
import { addTime, dataNormalized } from '../../utils/index.js'

const getNotionListingByDate__getFilter = ({
  config,
  pathVariables,
  routeType,
  slug,
}) => {
  const { NOTION } = config
  const { meta } = pathVariables
  const [year, month, day] = meta
  const metaCount = _size(meta)
  // @hack nothing to see here, haha
  const dateTimestamp = new Date().toISOString()
  const timestampQuery = new Date(
    `${!!year ? year : dateTimestamp.slice(0, 4)}-${!!month ? month : '01'}-${
      !!day ? day : '01'
    }`,
  )

  /**
   * @filter
   * @note metaCount breakdown:
   * 1 = yyyy
   * 2 = yyyy/mm
   * 3 = yyyy/mm/dd
   * ? = yyyy/mm/dd/slug (SLUG_BY_ROUTE takes this over)
   */
  const property =
    NOTION[routeType.toUpperCase()]?.infoType?.notion ??
    PROPERTIES.datePublished.notion

  switch (metaCount) {
    /**
     * @note yyyy
     */
    case 1:
      return {
        and: [
          {
            date: {
              on_or_after: addTime(timestampQuery, ''),
            },
            property,
          },
          {
            date: {
              before: addTime(timestampQuery, 'year'),
            },
            property,
          },
        ],
      }

    /**
     * @note yyyy/mm
     */
    case 2:
      return {
        and: [
          {
            date: {
              on_or_after: addTime(timestampQuery, ''),
            },
            property,
          },
          {
            date: {
              before: addTime(timestampQuery, 'month'),
            },
            property,
          },
        ],
      }

    /**
     * @note yyyy/mm/dd
     */
    case 3:
      return {
        and: [
          {
            date: {
              on_or_after: addTime(timestampQuery, ''),
            },
            property,
          },
          {
            date: {
              before: addTime(timestampQuery, 'day'),
            },
            property,
          },
        ],
      }

    /**
     * @note yyyy/mm/dd/slug
     *
     * Technically this is picked up by `getNotionSlugByRoute` SLUG_BY_ROUTE
     */
    default:
      return {
        and: [
          {
            date: {
              on_or_after: addTime(timestampQuery, ''),
            },
            property,
          },
          {
            date: {
              before: addTime(timestampQuery, 'day'),
            },
            property,
          },
          {
            ...QUERIES.slug,
            rich_text: { equals: slug },
          },
        ],
      }
  }
}

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

  let content: any = {},
    info: any = {}

  const page_id = NOTION[routeType.toUpperCase()].page_id__seo
  const _info = await getPagesById({
    page_id,
  })
  if (_info.object === 'page') {
    info = _omit(_info, 'properties')
    info['properties'] = sortObject(
      dataNormalized({ config, data: _info, pageId: _info.id, pathVariables }),
    )
  }

  content = await getBlocksByIdChildren({ block_id: info.id })

  const sorts: SortItem[] = [
    {
      direction: 'descending',
      property: PROPERTIES.datePublished.notion,
    },
  ]
  const filter = getNotionListingByDate__getFilter({
    config,
    pathVariables,
    routeType,
    slug,
  })

  const database_id = NOTION[routeType.toUpperCase()].database_id

  const ___items: any = await getDatabasesByIdQuery({
    database_id,
    filter,
    sorts,
  })
  const __items: any[] = []
  _map(___items.results, (i) => {
    const item = _omit(i, 'properties')
    item['properties'] = sortObject(
      dataNormalized({ config, data: i, pageId: item.id, pathVariables }),
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !!item && __items.push(item)
  })
  const _items = _omit(___items, 'results')
  _items.results = __items
  const items = _omit(_items, 'data')

  /**
   * @note(plaiceholder)
   *
   * Pass empty `images` object for SSR/API takeover
   */
  return { content, images: {}, info, items }
}

export default getNotionListingByDate
