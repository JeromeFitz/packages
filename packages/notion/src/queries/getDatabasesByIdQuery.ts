import { PROPERTIES } from '../schema'

const mock: any = {
  sorts: [
    {
      property: PROPERTIES.slug.notion,
      direction: 'ascending',
    },
  ],
}

// @todo(types)
const getDatabasesByIdQuery = async (
  callbackFunction: any,
  { database_id, sorts = mock.sorts, filter = mock.filter }
) => {
  if (!database_id) return []
  return await callbackFunction({
    database_id,
    sorts,
    filter,
  })
}

export default getDatabasesByIdQuery
