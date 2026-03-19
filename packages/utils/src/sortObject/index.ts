import _fromPairs from 'lodash-es/fromPairs'
import _sortBy from 'lodash-es/sortBy'
import _toPairs from 'lodash-es/toPairs'

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
