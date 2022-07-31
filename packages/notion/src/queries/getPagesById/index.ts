// import { avoidRateLimit, isUndefined } from '@jeromefitz/utils'
import { isUndefined } from '@jeromefitz/utils'

// @todo(types)
const getPagesById = async ({ getPagesRetrieve, page_id }) => {
  if (isUndefined(page_id)) return []
  // await avoidRateLimit(0)
  return await getPagesRetrieve({
    page_id,
  })
}

export default getPagesById
