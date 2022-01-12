import { avoidRateLimit, isUndefined } from '../utils'

// @todo(types)
const getBlocksByIdChildren = async (callbackFunction: any, { block_id }) => {
  if (isUndefined(block_id)) return []
  await avoidRateLimit()
  return await callbackFunction({
    block_id,
  })
}

export default getBlocksByIdChildren
