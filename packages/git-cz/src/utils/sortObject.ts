// @todo(any)
const sortObject = (obj: any) =>
  Object.keys(obj)
    .sort()
    // @todo(any)
    .reduce((res: any, key) => ((res[key] = obj[key]), res), {})

export default sortObject
