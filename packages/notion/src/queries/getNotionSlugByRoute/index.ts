import { sortObject } from '@jeromefitz/utils'
import _omit from 'lodash/omit.js'
import _size from 'lodash/size.js'

import { DATA_TYPES, PROPERTIES, QUERIES } from '../../constants'
import { addTime, dataNormalized } from '../../utils'

/**
 * @note Determine if PARENT|CHILD should be returned:
 *
 * PARENT
 * - /[parent-routeType]/[slug]
 * - /podcasts/jer-and-ky-and-guest
 *
 * CHILD
 * - /[parent-routeType]/[child-routeType]/[slug]
 * - /podcasts/jer-and-ky-and-guest/am-i-dracula-greg-gillotti

 *
 */
const getNotionSlugByRoute__getDataByParentRouteType = async ({
  config,
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  getQuery,
  pathVariables,
  routeType,
  // slug,
}) => {
  const { NOTION } = config
  const { meta } = pathVariables

  const ROUTE_TYPE = routeType.toUpperCase()

  const [parentSlug, slug] = meta
  const isChild = _size(meta) === 2

  const CHILD = NOTION[ROUTE_TYPE]?.hasChild.toUpperCase()

  const __info: any = await getDatabasesByIdQuery({
    database_id:
      NOTION[isChild ? NOTION[CHILD].routeType.toUpperCase() : ROUTE_TYPE]
        .database_id,
    filter: {
      and: [
        {
          ...QUERIES.slug,
          rich_text: { equals: isChild ? slug : parentSlug },
        },
      ],
    },
  })

  const _info = __info?.object === 'list' && __info.results[0]
  // @refactor(404)
  if (!_info) {
    return { info: {}, content: {}, items: {}, images: {} }
  }
  const info = _omit(_info, 'properties')
  info['properties'] = sortObject(
    dataNormalized({ config, data: _info, pathVariables, pageId: info.id })
  )
  const content = await getBlocksByIdChildren({ block_id: info.id })
  let items = {}

  /**
   * @note if PARENT then get CHILDREN via `items`
   */
  if (!isChild) {
    items = await getQuery({
      config,
      reqQuery: {
        podcasts: info.id,
        databaseType: NOTION[CHILD].routeType.toUpperCase(),
      },
    })
  }

  return { info, content, items, images: {} }
}

/**
 * @note This is unique because the following are different:
 *
 * - /events/2020/05/01/jerome-and
 * - /events/2020/05/08/jerome-and
 * - /[routeType]/[yyyy/mm/dd]/[slug]
 *
 * We actually _do_ use the date for this.
 *
 */
const getNotionSlugByRoute__getDataByListingDate = async ({
  config,
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  // getQuery,
  pathVariables,
  routeType,
  slug,
}) => {
  const dateTimestamp = new Date().toISOString()

  const { NOTION } = config
  const { meta } = pathVariables

  const [year, month, day] = meta
  /**
   * @hack uh... nothing to see here, haha
   */
  const timestampQuery = new Date(
    `${!!year ? year : dateTimestamp.slice(0, 4)}-${!!month ? month : '01'}-${
      !!day ? day : '01'
    }`
  )
  const property =
    NOTION[routeType.toUpperCase()]?.infoType?.notion ??
    PROPERTIES.datePublished.notion

  const __info: any = await getDatabasesByIdQuery({
    database_id: NOTION[routeType.toUpperCase()].database_id,
    filter: {
      and: [
        {
          property,
          date: {
            on_or_after: addTime(timestampQuery, ''),
          },
        },
        {
          property,
          date: {
            before: addTime(timestampQuery, 'day'),
          },
        },
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
    return { info: {}, content: {}, items: {}, images: {} }
  }

  const info = _omit(_info, 'properties')
  info['properties'] = sortObject(
    dataNormalized({ config, data: _info, pathVariables, pageId: info.id })
  )
  const content = await getBlocksByIdChildren({ block_id: info.id })

  return { info, content, items: {}, images: {} }
}

const getNotionSlugByRoute = async ({
  config,
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  getQuery,
  pathVariables,
  routeType,
  slug,
}) => {
  const { NOTION, ROUTE_TYPES_BY_DATA_TYPES } = config

  /**
   * @custom (notion) DATA_TYPES.SLUG_BY_ROUTE -- but customized:
   * Determine if `routeType` is a parent|child
   *
   */
  if (!!NOTION[routeType.toUpperCase()].hasChild) {
    return await getNotionSlugByRoute__getDataByParentRouteType({
      config,
      getBlocksByIdChildren,
      getDatabasesByIdQuery,
      getQuery,
      pathVariables,
      routeType,
      // slug,
    })
  }

  /**
   * @custom (notion) DATA_TYPES.LISTING_BY_DATE
   *
   */
  if (
    ROUTE_TYPES_BY_DATA_TYPES[DATA_TYPES.LISTING_BY_DATE].includes(
      routeType.toUpperCase()
    )
  ) {
    return await getNotionSlugByRoute__getDataByListingDate({
      config,
      getBlocksByIdChildren,
      getDatabasesByIdQuery,
      // getQuery,
      pathVariables,
      routeType,
      slug,
    })
  }

  return { info: {}, content: {}, items: {}, images: {} }
}

export default getNotionSlugByRoute
