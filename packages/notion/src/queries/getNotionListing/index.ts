import { sortObject } from '@jeromefitz/utils'

import _map from 'lodash/map.js'
import _omit from 'lodash/omit.js'

import { PROPERTIES } from '../../constants/index.js'
import { dataNormalized } from '../../utils/index.js'

const getNotionListing = async ({
  config,
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  getPagesById,
  pathVariables,
  routeType,
}) => {
  const { NOTION } = config

  let info: any = {}

  const page_id = NOTION[routeType.toUpperCase()].page_id__seo
  const _info = await getPagesById({
    page_id,
  })
  // @refactor(404)
  if (!_info) {
    return {}
  }
  if (_info?.object === 'page') {
    info = _omit(_info, 'properties')
    info.properties = sortObject(
      dataNormalized({ config, data: _info, pageId: info.id, pathVariables }),
    )
  }

  const property =
    NOTION[routeType.toUpperCase()].infoType.notion ??
    PROPERTIES.datePublished.notion

  /**
   * @todo Can we make the date dynamic?
   * This can be considered the date you want to go back in time to on build.
   * Can be construed as the website creation date, too I guess.
   *
   * For those routeTypes that do not go off of datePublished,
   *  we want to get their listing by the current date.
   *
   * ex) /events => Only want events that are in the future.
   *
   */
  const timestamp =
    property === PROPERTIES.datePublished.notion
      ? new Date('2020-01-01').toISOString()
      : new Date().toISOString()

  const content = await getBlocksByIdChildren({ block_id: info.id })
  const _items: any = await getDatabasesByIdQuery({
    database_id: NOTION[routeType.toUpperCase()].database_id,
    filter: {
      and: [
        {
          date: {
            on_or_after: timestamp,
          },
          property,
        },
      ],
    },
  })
  const results: any[] = []
  _map(_items.results, (item) => {
    let itemInit = item
    itemInit = _omit(itemInit, 'properties')
    itemInit.properties = sortObject(
      dataNormalized({ config, data: item, pageId: item.id, pathVariables }),
    )
    results.push(itemInit)
    // console.dir(`> last_edited_time`)
    // console.dir(item.id)
    // console.dir(item.last_edited_time)
    // console.dir(`---`)
  })
  const items = _omit(_items, 'results')
  items.results = results

  /**
   * @note(plaiceholder)
   *
   * Pass empty `images` object for SSR/API takeover
   */
  return { content, images: {}, info, items }
}

export default getNotionListing
