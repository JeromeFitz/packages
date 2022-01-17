import { sortObject } from '@jeromefitz/utils'
import _map from 'lodash/map.js'
import _omit from 'lodash/omit.js'

import { dataNormalized } from '../../utils'

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
    normalizedResult['properties'] = sortObject(
      dataNormalized({
        config,
        data: result,
        pathVariables: routeType,
        pageId: result?.id,
      })
    )
    normalizedResults.push(normalizedResult)
  })
  return normalizedResults
}

export default dataNormalizedResults
