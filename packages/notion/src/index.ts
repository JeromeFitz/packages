import { Client as _Client } from '@notionhq/client'
// import type { ClientOptions as _ClientOptions } from '@notionhq/client/build/src/client'

import * as constants from './constants'
import * as queries from './queries'
// import { INIT, LOOKUP, PROPERTIES, PROPERTIES_LOOKUP } from './schema'
import * as TYPES from './schema'
// import * as utils from './utils'

// interface ClientOptions extends _ClientOptions {
//   config: any
// }

const { DATA_TYPES } = constants

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
      await queries.getBlocksByIdChildren(this.blocks.children.list, { ...props }),

    getDatabasesByIdQuery: async (props: {
      database_id: any
      sorts?: any
      filter?: any
    }) => await queries.getDatabasesByIdQuery(this.databases.query, props),

    getDeepFetchAllChildren: async (props: { blocks: any }) =>
      await queries.getDeepFetchAllChildren(this.blocks.children.list, { ...props }),

    getInfoType: (props: { config: any; item: any; routeType: any; meta: any }) =>
      queries.getInfoType({ ...props, config: this.#config }),

    getPagesById: async (props) =>
      await queries.getPagesById(this.pages.retrieve, { ...props }),

    getPathVariables: (props: { config: any; catchAll: any }) =>
      queries.getPathVariables({ ...props, config: this.#config }),

    getQuery: async (props) =>
      await queries.getQuery({
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
      return await queries.getNotionListing({
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
      return await queries.getNotionListingByDate({
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
      return await queries.getNotionSlug({
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
      return await queries.getNotionSlugByRoute({
        ...props,
        config: this.#config,
        getBlocksByIdChildren: this.custom.getBlocksByIdChildren,
        getDatabasesByIdQuery: this.custom.getDatabasesByIdQuery,
        getQuery: this.custom.getQuery,
      })
    },
  }
}

export {
  constants,
  Client,
  // DATA_TYPES,
  // INIT,
  // LOOKUP,
  // PROPERTIES_LOOKUP,
  // PROPERTIES,
  // queries,
  // utils,
}
export type { TYPES }
