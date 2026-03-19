import type { SortMock } from '../../schema/index'

import { PROPERTIES } from '../../constants/index'

const sortDefault: SortMock = {
  sorts: [
    {
      direction: 'ascending',
      property: PROPERTIES.slug.notion,
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
    filter,
    sorts,
  })
}

export default getDatabasesByIdQuery
