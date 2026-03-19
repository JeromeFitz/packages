import {
  fromPairs as _fromPairs,
  sortBy as _sortBy,
  toPairs as _toPairs,
} from 'lodash-es'

// @todo(any)
const sortObject: any = (data: any) => _fromPairs(_sortBy(_toPairs(data)))

export default sortObject

/**
 * @todo(non-lodash)
 */
// // @todo(any)
// const sortObject = (obj: any) =>
//   Object.keys(obj)
//     .sort()
//     // @todo(any)
//     // biome-ignore lint/suspicious/noAssignInExpressions: todo
//     // biome-ignore lint/complexity/noCommaOperator: todo
//     .reduce((res: any, key) => ((res[key] = obj[key]), res), {})

// export default sortObject
