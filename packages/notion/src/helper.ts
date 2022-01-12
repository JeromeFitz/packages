import { PROPERTIES } from './schema'
import type { DataTypes, DataTypesObject } from './schema/types'

const dateTimestamp = new Date().toISOString()
// const dateTimestampBlog = new Date('2020-01-01').toISOString()

/**
 * @note(notion) right now we are only using `QUERIES.slug`
 */
const QUERIES = {
  // @todo(notion) Published or Event?
  dateBefore: {
    property: PROPERTIES.datePublished.notion,
    date: {
      before: dateTimestamp,
    },
  },
  // @todo(notion) Published or Event?
  dateOnOrAfter: {
    property: PROPERTIES.datePublished.notion,
    date: {
      on_or_after: dateTimestamp,
    },
  },
  published: {
    property: PROPERTIES.isPublished.notion,
    checkbox: {
      equals: false,
    },
  },
  slug: {
    property: PROPERTIES.slug.notion,
    text: {
      equals: '',
    },
  },
}

const LISTING: DataTypes = 'LISTING'
const LISTING_BY_DATE: DataTypes = 'LISTING_BY_DATE'
const SLUG: DataTypes = 'SLUG'
const SLUG_BY_ROUTE: DataTypes = 'SLUG_BY_ROUTE'

const getDataTypes: DataTypes[] = [LISTING, LISTING_BY_DATE, SLUG, SLUG_BY_ROUTE]

const DATA_TYPES: DataTypesObject = Object.assign(
  {},
  ...getDataTypes.map((d) => ({ [d]: d })).flat(1)
)

export { getDataTypes, DATA_TYPES, QUERIES }
