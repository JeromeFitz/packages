const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export default isObject
