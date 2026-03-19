import {
  fromPairs as _fromPairs,
  sortBy as _sortBy,
  toPairs as _toPairs,
} from 'lodash-es'

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
