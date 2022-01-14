import _map from 'lodash/map.js'
import _omit from 'lodash/omit.js'

import { dataNormalized, dataSorted } from '../utils'

const dataNormalizedResults = ({ config, results, routeType }) => {
  const normalizedResults: any[] = []
  _map(results, (result) => {
    const normalizedResult = _omit(result, 'properties')
    normalizedResult['properties'] = dataSorted(
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
