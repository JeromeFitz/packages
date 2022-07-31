// import { avoidRateLimit, isUndefined } from '@jeromefitz/utils'
import { isUndefined } from '@jeromefitz/utils'

// @todo(types)
const getPagePropertyItem = async ({
  getPagePropertyItemRetrieve,
  page_id,
  property_id,
}) => {
  if (isUndefined(page_id)) return []
  // await avoidRateLimit(0)
  console.dir(`> getPagePropertyItem`)
  console.dir(`>> page_id: ${page_id}`)
  console.dir(`>> property_id: ${property_id}`)
  console.dir(`---`)
  return await getPagePropertyItemRetrieve({
    page_id,
    property_id,
  })
}

export default getPagePropertyItem
