/* eslint-disable prefer-const */
import _omit from 'lodash/omit.js'
import _size from 'lodash/size.js'

import { QUERIES } from '../helper'
import { PROPERTIES } from '../schema'
import { addTime, dataNormalized, dataSorted } from '../utils'

// @todo(complexity) 16
// eslint-disable-next-line complexity
const getNotionSlugByRoute = async ({
  config,
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  getQuery,
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

  if (routeType === NOTION.PODCASTS.routeType) {
    const [podcastSlug, episodeSlug] = meta
    const hasEpisode = _size(meta) === 2
    const infoInit: any = await getDatabasesByIdQuery({
      database_id:
        NOTION[
          hasEpisode
            ? NOTION.EPISODES.routeType.toUpperCase()
            : routeType.toUpperCase()
        ].database_id,
      filter: {
        and: [
          {
            ...QUERIES.slug,
            text: { equals: hasEpisode ? episodeSlug : podcastSlug },
          },
        ],
      },
    })

    const _info = infoInit?.object === 'list' && infoInit.results[0]
    // @refactor(404)
    if (!_info) {
      return {}
    }
    info = _omit(_info, 'properties')
    info['properties'] = dataSorted(
      dataNormalized({ config, data: _info, pathVariables, pageId: info.id })
    )
    content = await getBlocksByIdChildren({ block_id: info.id })

    // @hack(podcasts)
    if (!hasEpisode) {
      if (routeType === NOTION.PODCASTS.routeType) {
        items = await getQuery({
          config,
          reqQuery: {
            podcasts: info.id,
            databaseType: NOTION.EPISODES.routeType.toUpperCase(),
          },
        })
      }
    }
  }

  if ([NOTION.BLOG.routeType, NOTION.EVENTS.routeType].includes(routeType)) {
    const [year, month, day] = meta
    const timestampQuery = new Date(
      `${!!year ? year : dateTimestamp.slice(0, 4)}-${!!month ? month : '01'}-${
        !!day ? day : '01'
      }`
    )
    const info4__be: any = await getDatabasesByIdQuery({
      database_id: NOTION[routeType.toUpperCase()].database_id,
      filter: {
        and: [
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              on_or_after: addTime(timestampQuery, ''),
            },
          },
          {
            property:
              routeType === NOTION.EVENTS.routeType
                ? PROPERTIES.dateEvent.notion
                : PROPERTIES.datePublished.notion,
            date: {
              before: addTime(timestampQuery, 'day'),
            },
          },
          {
            ...QUERIES.slug,
            text: { equals: slug },
          },
        ],
      },
    })

    const info4__bea = info4__be?.object === 'list' && info4__be.results[0]
    if (!!info4__bea) {
      info = _omit(info4__bea, 'properties')
      info['properties'] = dataSorted(
        dataNormalized({ config, data: info4__bea, pathVariables, pageId: info.id })
      )
      content = await getBlocksByIdChildren({ block_id: info.id })
    }
  }

  let data = { info, content, items, images: {} }
  // @todo(images)
  let images = {}
  data = { ...data, images }

  return data
}

export default getNotionSlugByRoute
