import _fromPairs from 'lodash/fromPairs.js'
import _sortBy from 'lodash/sortBy.js'
import _toPairs from 'lodash/toPairs.js'

const sortObject = (data: any) => _fromPairs(_sortBy(_toPairs(data)))

export default sortObject

/**
 * @todo(non-lodash)
 */
// // @todo(any)
// const sortObject = (obj: any) =>
//   Object.keys(obj)
//     .sort()
//     // @todo(any)
//     .reduce((res: any, key) => ((res[key] = obj[key]), res), {})

// export default sortObject
