import _fromPairs from 'lodash/fromPairs'
import _sortBy from 'lodash/sortBy'
import _toPairs from 'lodash/toPairs'

const dataSorted = (data: any) => _fromPairs(_sortBy(_toPairs(data)))

export default dataSorted
