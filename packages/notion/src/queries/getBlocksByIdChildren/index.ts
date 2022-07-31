// import { avoidRateLimit, isUndefined } from '@jeromefitz/utils'
import { isUndefined } from '@jeromefitz/utils'

// @todo(types)
const getBlocksByIdChildren = async ({ getBlocksChildrenList, block_id }) => {
  if (isUndefined(block_id)) return []
  // await avoidRateLimit(0)
  return await getBlocksChildrenList({
    block_id,
  })
}

export default getBlocksByIdChildren
