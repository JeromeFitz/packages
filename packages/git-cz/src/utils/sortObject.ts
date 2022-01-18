// @todo(types)
const sortObject = (obj: any) =>
  Object.keys(obj)
    .sort()
    .reduce((res: any, key) => ((res[key] = obj[key]), res), {})

export default sortObject
