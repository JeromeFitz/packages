import { Client as _Client } from "@notionhq/client";

import { DATA_TYPES } from "./constants/index";
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
} from "./queries/index";

type ClientProps = {
  custom: CustomProps;
  dataTypes: DataTypesProps;
};

type CredentialProps = {
  auth: string;
  config: any;
};

type CustomProps = {
  getBlocksByIdChildren: any;
  getDatabasesByIdQuery: any;
  getDeepFetchAllChildren: any;
  getInfoType: any;
  getPagesById: any;
  getPathVariables: any;
  getQuery: any;
};

type DataTypesProps = {
  LISTING: any;
  LISTING_BY_DATE: any;
  SLUG: any;
  SLUG_BY_ROUTE: any;
};

class Client extends _Client {
  #config?: any;

  #getDataSourceId = async (database_id: string): Promise<string> => {
    const database = await this.databases.retrieve({ database_id });
    const data_source_id = "data_sources" in database ? database.data_sources[0]?.id : undefined;
    if (!data_source_id) {
      throw new Error(`No data source found for Notion database ${database_id}`);
    }
    return data_source_id;
  };

  #queryDatabase = async ({
    database_id,
    ...rest
  }: {
    database_id: string;
    [key: string]: any;
  }) => {
    const data_source_id = await this.#getDataSourceId(database_id);
    return await this.dataSources.query({ data_source_id, ...rest });
  };

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
        getDatabasesQuery: this.#queryDatabase,
      }),

    getDeepFetchAllChildren: async (props) =>
      await getDeepFetchAllChildren({
        ...props,
        getBlocksChildrenList: this.blocks.children.list,
      }),

    getInfoType: (props) => {
      return getInfoType({ ...props, config: this.#config });
    },

    getPagesById: async (props) =>
      await getPagesById({ ...props, getPagesRetrieve: this.pages.retrieve }),

    getPathVariables: (props) => getPathVariables({ ...props, config: this.#config }),

    getQuery: async (props) =>
      await getQuery({
        ...props,
        config: this.#config,
        notionDatabasesQuery: this.#queryDatabase,
      }),
  };

  /**
   * @info details at: ../../utils/getDataType
   *
   */
  public readonly dataTypes = {
    [DATA_TYPES.LISTING]: async (props: { pathVariables: any; routeType: any; slug?: any }) => {
      // console.dir(`📦️ [@jeromefitz/notion] => ${DATA_TYPES.LISTING}`)
      return await getNotionListing({
        ...props,
        config: this.#config,
        getBlocksByIdChildren: this.custom.getBlocksByIdChildren,
        getDatabasesByIdQuery: this.custom.getDatabasesByIdQuery,
        getPagesById: this.custom.getPagesById,
      });
    },

    [DATA_TYPES.LISTING_BY_DATE]: async (props: {
      pathVariables: any;
      routeType: any;
      slug: any;
    }) => {
      // console.dir(`📦️ [@jeromefitz/notion] => ${DATA_TYPES.LISTING_BY_DATE}`)
      return await getNotionListingByDate({
        ...props,
        config: this.#config,
        getBlocksByIdChildren: this.custom.getBlocksByIdChildren,
        getDatabasesByIdQuery: this.custom.getDatabasesByIdQuery,
        getPagesById: this.custom.getPagesById,
      });
    },

    [DATA_TYPES.SLUG]: async (props: { pathVariables: any; routeType: any; slug: any }) => {
      // console.dir(`📦️ [@jeromefitz/notion] => ${DATA_TYPES.SLUG}`)
      return await getNotionSlug({
        ...props,
        config: this.#config,
        getBlocksByIdChildren: this.custom.getBlocksByIdChildren,
        getDatabasesByIdQuery: this.custom.getDatabasesByIdQuery,
        getDeepFetchAllChildren: this.custom.getDeepFetchAllChildren,
      });
    },

    [DATA_TYPES.SLUG_BY_ROUTE]: async (props: {
      pathVariables: any;
      routeType: any;
      slug: any;
    }) => {
      // console.dir(`📦️ [@jeromefitz/notion] => ${DATA_TYPES.SLUG_BY_ROUTE}`)
      return await getNotionSlugByRoute({
        ...props,
        config: this.#config,
        getBlocksByIdChildren: this.custom.getBlocksByIdChildren,
        getDatabasesByIdQuery: this.custom.getDatabasesByIdQuery,
        getQuery: this.custom.getQuery,
      });
    },
  };

  // public constructor(options?: ClientOptions) {
  public constructor(options?: any) {
    super(options);
    this.#config = options?.config;
  }
}

export type { ClientProps, CredentialProps };
export { Client };
