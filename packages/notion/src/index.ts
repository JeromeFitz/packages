import { Client as _Client } from '@notionhq/client'

import { DATA_TYPES } from './constants/index.js'
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
} from './queries/index.js'

// biome-ignore lint/nursery/useConsistentTypeDefinitions: migrate
type ClientProps = {
  custom: CustomProps
  dataTypes: DataTypesProps
}

// biome-ignore lint/nursery/useConsistentTypeDefinitions: migrate
type CredentialProps = {
  auth: string
  config: any
}

// biome-ignore lint/nursery/useConsistentTypeDefinitions: migrate
type CustomProps = {
  getBlocksByIdChildren: any
  getDatabasesByIdQuery: any
  getDeepFetchAllChildren: any
  getInfoType: any
  getPagesById: any
  getPathVariables: any
  getQuery: any
}

// biome-ignore lint/nursery/useConsistentTypeDefinitions: migrate
type DataTypesProps = {
  LISTING: any
  LISTING_BY_DATE: any
  SLUG: any
  SLUG_BY_ROUTE: any
}

class Client extends _Client {
  #config?: any

  // @todo(notion) throw error if `config` is not passed
  public readonly custom = {
    getBlocksByIdChildren: async (props) =>
      await getBlocksByIdChildren({
        ...props,
        getBlocksChildrenList: this.blocks.children.list,
      }),

    getDatabasesByIdQuery: async (props) =>
      await getDatabasesByIdQuery({
        ...props,
        getDatabasesQuery: this.databases.query,
      }),

    getDeepFetchAllChildren: async (props) =>
      await getDeepFetchAllChildren({
        ...props,
        getBlocksChildrenList: this.blocks.children.list,
      }),

    getInfoType: (props) => {
      return getInfoType({ ...props, config: this.#config })
    },

    getPagesById: async (props) =>
      await getPagesById({ ...props, getPagesRetrieve: this.pages.retrieve }),

    getPathVariables: (props) =>
      getPathVariables({ ...props, config: this.#config }),

    getQuery: async (props) =>
      await getQuery({
        ...props,
        config: this.#config,
        notionDatabasesQuery: this.databases.query,
      }),
  }

  /**
   * @info details at: ../../utils/getDataType
   *
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

  // public constructor(options?: ClientOptions) {
  public constructor(options?: any) {
    super(options)
    this.#config = options?.config
  }
}

export { Client }
export type { ClientProps, CredentialProps }
