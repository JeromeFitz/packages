import { Client as _Client } from '@notionhq/client'

import { DATA_TYPES } from './constants'
import {
  getBlocksByIdChildren,
  getDatabasesByIdQuery,
  getDeepFetchAllChildren,
  getInfoType,
  getNotionListing,
  getNotionListingByDate,
  getNotionSlug,
  getNotionSlugByRoute,
  getPagesById,
  getPathVariables,
  getQuery,
} from './queries'

class Client extends _Client {
  #config?: any

  // @todo(notion) throw error if `config` is not passed
  // public constructor(options?: ClientOptions) {
  public constructor(options?: any) {
    super(options)
    this.#config = options?.config
  }

  public readonly custom = {
    getBlocksByIdChildren: async (props: { block_id: any }) =>
      await getBlocksByIdChildren(this.blocks.children.list, { ...props }),

    getDatabasesByIdQuery: async (props: {
      database_id: any
      sorts?: any
      filter?: any
    }) => await getDatabasesByIdQuery(this.databases.query, props),

    getDeepFetchAllChildren: async (props: { blocks: any }) =>
      await getDeepFetchAllChildren(this.blocks.children.list, { ...props }),

    getInfoType: (props: { config: any; item: any; routeType: any; meta: any }) =>
      getInfoType({ ...props, config: this.#config }),

    getPagesById: async (props) =>
      await getPagesById(this.pages.retrieve, { ...props }),

    getPathVariables: (props: { config: any; catchAll: any }) =>
      getPathVariables({ ...props, config: this.#config }),

    getQuery: async (props) =>
      await getQuery({
        ...props,
        config: this.#config,
        notionDatabasesQuery: this.databases.query,
      }),
  }

  /**
   * @info
   *
   * 1 = /about, /colophon, /contact
   * 2 = /blog, /events, /podcasts
   * 3 = /blog/2020, /blog/2020/05, /blog/2020/05/09
   *     /events/2020, /events/2020/05, /events/2020/05/09,
   * 4 = /blog/2020/05/09/title, /events/2020/05/09/title,
   *     /podcasts/knockoffs/i-know-what-you-did-last-summer
   * 5 = /shows/alex-o-jerome, /events/2020/05/09/jerome-and,
   *     /podcasts/knockoffs
   */
  public readonly dataTypes = {
    [DATA_TYPES.LISTING]: async (props: {
      pathVariables: any
      routeType: any
      slug?: any
    }) => {
      // console.dir(`📦️ [@jeromefitz/notion] => ${DATA_TYPES.LISTING}`)
      return await getNotionListing({
        ...props,
        config: this.#config,
        getBlocksByIdChildren: this.custom.getBlocksByIdChildren,
        getDatabasesByIdQuery: this.custom.getDatabasesByIdQuery,
        getPagesById: this.custom.getPagesById,
      })
    },

    [DATA_TYPES.LISTING_BY_DATE]: async (props: {
      pathVariables: any
      routeType: any
      slug: any
    }) => {
      // console.dir(`📦️ [@jeromefitz/notion] => ${DATA_TYPES.LISTING_BY_DATE}`)
      return await getNotionListingByDate({
        ...props,
        config: this.#config,
        getBlocksByIdChildren: this.custom.getBlocksByIdChildren,
        getDatabasesByIdQuery: this.custom.getDatabasesByIdQuery,
        getPagesById: this.custom.getPagesById,
      })
    },

    [DATA_TYPES.SLUG]: async (props: {
      pathVariables: any
      routeType: any
      slug: any
    }) => {
      // console.dir(`📦️ [@jeromefitz/notion] => ${DATA_TYPES.SLUG}`)
      return await getNotionSlug({
        ...props,
        config: this.#config,
        getBlocksByIdChildren: this.custom.getBlocksByIdChildren,
        getDatabasesByIdQuery: this.custom.getDatabasesByIdQuery,
        getDeepFetchAllChildren: this.custom.getDeepFetchAllChildren,
      })
    },

    [DATA_TYPES.SLUG_BY_ROUTE]: async (props: {
      pathVariables: any
      routeType: any
      slug: any
    }) => {
      // console.dir(`📦️ [@jeromefitz/notion] => ${DATA_TYPES.SLUG_BY_ROUTE}`)
      return await getNotionSlugByRoute({
        ...props,
        config: this.#config,
        getBlocksByIdChildren: this.custom.getBlocksByIdChildren,
        getDatabasesByIdQuery: this.custom.getDatabasesByIdQuery,
        getQuery: this.custom.getQuery,
      })
    },
  }
}

export { Client }
