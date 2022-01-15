import _fromPairs from 'lodash/fromPairs.js'
import _sortBy from 'lodash/sortBy.js'
import _toPairs from 'lodash/toPairs.js'

const dataSorted = (data: any) => _fromPairs(_sortBy(_toPairs(data)))

export default dataSorted
