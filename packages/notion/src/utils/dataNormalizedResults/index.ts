import { sortObject } from '@jeromefitz/utils'

import _map from 'lodash-es/map'
import _omit from 'lodash-es/omit'

import { dataNormalized } from '../../utils/index'

/**
 * @todo(notion)
 *
 * Refactor after `dataNormalized` to remove `config` as a parameter,
 *  or move this to `queries`
 */
const dataNormalizedResults = ({ config, results, routeType }) => {
  const normalizedResults: any[] = []
  _map(results, (result) => {
    const normalizedResult = _omit(result, 'properties')
    normalizedResult.properties = sortObject(
      dataNormalized({
        config,
        data: result,
        pageId: result?.id,
        pathVariables: routeType,
      }),
    )
    normalizedResults.push(normalizedResult)
  })
  return normalizedResults
}

export default dataNormalizedResults
