import { avoidRateLimit, isObjectEmpty } from '@jeromefitz/utils'

import _map from 'lodash/map.js'
import _omit from 'lodash/omit.js'
import _size from 'lodash/size.js'

import type { SortItem } from '../../schema/index.js'

import { PROPERTIES } from '../../constants/index.js'
import dataNormalizedResults from '../../utils/dataNormalizedResults/index.js'

// const useCache = process.env.NEXT_PUBLIC__NOTION_USE_CACHE
// const useCache = false

const SORTS: SortItem[] = [
  {
    direction: 'ascending',
    property: PROPERTIES.slug.notion,
  },
]

// @todo(complexity) 12
// eslint-disable-next-line complexity
const getQuery = async ({ config, notionDatabasesQuery, reqQuery }) => {
  const { NOTION } = config
  const { databaseType } = reqQuery
  const routeType = databaseType
  let hasError = false

  /**
   * @setup
   */
  const DATABASE_TYPE = databaseType.toUpperCase()
  const database_id = NOTION[DATABASE_TYPE].database_id
  if (!database_id) return []

  // @todo(types) any
  let data: any = {},
    items: any = {}
  let filter: any, sorts: any

  /**
   * @todo(notion) move this to the api so it can be re-used
   *  not hidden in here all hacky
   *
   * @note(notion) right now only need this for episodes of podcasts
   * _OR_ Related Databases (PODCASTS => EPISODES)
   *
   * This is not needed often and can/should probably be handled instead
   *  with Relations & Rollups rather than this customization
   */

  if (databaseType === 'EPISODES') {
    sorts = SORTS
    const { podcasts } = reqQuery

    // @todo(types)
    const filterTagEpisodesByPodcasts: any = []
    const podcastIds: any = []
    // @todo(NICE-129) eslint
    // eslint-disable-next-line no-unsafe-optional-chaining, @typescript-eslint/no-unused-expressions
    !!podcasts && podcastIds.push(...podcasts?.split(','))
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    _size(podcastIds) > 0 &&
      _map(podcastIds, (id) =>
        filterTagEpisodesByPodcasts.push({
          property: PROPERTIES.relationEpisodes__Podcasts.notion,
          relation: {
            contains: id,
          },
        }),
      )
    filter = { or: [...filterTagEpisodesByPodcasts] }
  } else {
    // console.dir(`no filter`)
    hasError = true
  }

  // /**
  //  * @cache pre
  //  */
  // if (useCache) {
  //   const url = catchAll.join('/')
  //   const cacheData = await getCache(url)
  //   if (!!cacheData) {
  //     data = cacheData
  //   }
  // }

  if (!hasError && (!data || isObjectEmpty(data))) {
    await avoidRateLimit(0)
    // @todo(types) any
    let contentData: Pick<any, number | string | symbol>
    // @todo(NICE-129) eslint
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!filter) {
      // @hack(notion)-do-not-return'
      if (filter?.or.length === 0) {
        filter = {
          and: [
            {
              property: PROPERTIES.slug.notion,
              rich_text: { equals: '@hack(notion)-do-not-return' },
            },
          ],
        }
      }
      contentData = await notionDatabasesQuery({
        database_id,
        filter,
        sorts,
      })

      data = contentData
      items = dataNormalizedResults({
        config,
        results: contentData.results,
        routeType,
      })
      data = _omit(data, 'results')
      data['results'] = items
    } else {
      // console.dir(`no filter`)
      hasError = true
    }

    // /**
    //  * @cache post
    //  */
    // if (useCache && !!data) {
    //   const url = catchAll.join('/')
    //   // console.dir(url)
    //   const isCacheExists = await getCache(url)
    //   // console.dir(isCacheExists)
    //   if (!isCacheExists || isCacheExists === undefined) {
    //     setCache(data, url)
    //   }
    // }
  }

  return data
}

export default getQuery
