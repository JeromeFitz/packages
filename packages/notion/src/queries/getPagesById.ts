import { avoidRateLimit, isUndefined } from '../utils'

// @todo(types)
const getPagesById = async (callbackFunction: any, { page_id }) => {
  if (isUndefined(page_id)) return []
  await avoidRateLimit()
  return await callbackFunction({
    page_id,
  })
}

export default getPagesById
