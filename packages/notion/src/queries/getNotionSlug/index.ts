/* eslint-disable prefer-const */
import _filter from 'lodash/filter.js'
import _omit from 'lodash/omit.js'

import { QUERIES } from '../../constants'
import { dataNormalized, dataSorted, getImages } from '../../utils'

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

  info['properties'] = dataSorted(
    dataNormalized({ config, data: _info, pathVariables, pageId: info.id })
  )

  content = await getBlocksByIdChildren({ block_id: info.id })
  const blocks = [...(await getDeepFetchAllChildren({ blocks: content.results }))]
  content = blocks

  if (!!items) {
    items.results = _filter(items.results, { properties: { isPublished: true } })
  }

  let data = { info, content, items, images: {} }

  const images = !!data ? await getImages({ data, pathVariables }) : {}

  data = { ...data, images }

  return data
}

export default getNotionSlug
