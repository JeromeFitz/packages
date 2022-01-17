import { PROPERTIES } from '../../constants'
import type { SortMock } from '../../schema'

const sortDefault: SortMock = {
  sorts: [
    {
      property: PROPERTIES.slug.notion,
      direction: 'ascending',
    },
  ],
}

// @todo(types)
const getDatabasesByIdQuery = async ({
  database_id,
  filter = sortDefault?.filter,
  getDatabasesQuery,
  sorts = sortDefault?.sorts,
}) => {
  if (!database_id) return []
  return await getDatabasesQuery({
    database_id,
    sorts,
    filter,
  })
}

export default getDatabasesByIdQuery
