// import _filter from 'lodash/filter.js'
import { sortObject } from '@jeromefitz/utils'

import _omit from 'lodash/omit.js'

import { QUERIES } from '../../constants/index.js'
import { dataNormalized } from '../../utils/index.js'

const getNotionSlug = async ({
  config,
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  getDeepFetchAllChildren,
  pathVariables,
  routeType,
  slug,
}) => {
  const { NOTION } = config

  const DB_TYPE = routeType?.toUpperCase()
  const isValid = Object.keys(NOTION).includes(DB_TYPE)

  if (!isValid) return { content: {}, images: {}, info: {}, items: {} }

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

  const info = _omit(_info, 'properties')
  info.properties = sortObject(
    dataNormalized({ config, data: _info, pageId: info.id, pathVariables }),
  )

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
  return { content, images: {}, info, items: {} }
}

export default getNotionSlug
