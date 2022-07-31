// import { sortObject } from '@jeromefitz/utils'
import { asyncForEach, noop as _noop } from '@jeromefitz/utils'
// import _map from 'lodash/map.js'
import _omit from 'lodash/omit.js'

import { dataNormalized } from '../../utils'

/**
 * @todo(notion)
 *
 * Refactor after `dataNormalized` to remove `config` as a parameter,
 *  or move this to `queries`
 */
const dataNormalizedResults = async ({
  config,
  getPagePropertyItem,
  results,
  routeType,
}) => {
  const normalizedResults: any[] = []
  // console.dir(`> results`)
  // console.dir(results)
  // _map(results, (result) => {
  await asyncForEach(results, async (result: any) => {
    const normalizedResult = _omit(result, 'properties')
    // normalizedResult['properties'] = sortObject(
    //   dataNormalized({
    //     config,
    //     data: result,
    //     pathVariables: routeType,
    //     pageId: result?.id,
    //   })
    // )
    // console.dir(`> result`)
    // console.dir(result)
    const foo = await dataNormalized({
      config,
      data: result,
      getPagePropertyItem,
      pathVariables: routeType,
      pageId: result?.id,
    })
    // console.dir(`>> foo`)
    // console.dir(foo)
    normalizedResult['properties'] = foo
    normalizedResults.push(normalizedResult)
  }).catch(_noop)
  return normalizedResults
}

export default dataNormalizedResults
