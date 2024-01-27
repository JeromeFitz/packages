const omit = (obj: { [x: string]: any }, props: any[]) => {
  obj = { ...obj }
  props.forEach((prop: number | string) => delete obj[prop])
  return obj
}

export default omit
