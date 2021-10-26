// @todo(any)
const sortObject = (obj: any) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  Object.keys(obj)
    .sort()
    // @todo(any)
    .reduce((res: any, key) => ((res[key] = obj[key]), res), {})

export default sortObject
