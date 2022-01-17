/* eslint-disable prefer-const */
import { sortObject } from '@jeromefitz/utils'
import _filter from 'lodash/filter.js'
import _omit from 'lodash/omit.js'

import { QUERIES } from '../../constants'
import { dataNormalized } from '../../utils'

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
  let content: any = {},
    info: any = {},
    items: any = {}

  const DB_TYPE = routeType?.toUpperCase()
  const isValid = Object.keys(NOTION).includes(DB_TYPE)

  if (!isValid) return { info, content, items, images: {} }

  const infoInit: any = await getDatabasesByIdQuery({
    database_id: NOTION[DB_TYPE].database_id,
    filter: {
      and: [
        {
          ...QUERIES.slug,
          text: { equals: slug },
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

  info['properties'] = sortObject(
    dataNormalized({ config, data: _info, pathVariables, pageId: info.id })
  )

  content = await getBlocksByIdChildren({ block_id: info.id })
  const blocks = [...(await getDeepFetchAllChildren({ blocks: content.results }))]
  content = blocks

  if (!!items) {
    items.results = _filter(items.results, { properties: { isPublished: true } })
  }

  /**
   * @note(plaiceholder)
   *
   * Pass empty `images` object for SSR/API takeover
   */
  return { info, content, items, images: {} }
}

export default getNotionSlug
