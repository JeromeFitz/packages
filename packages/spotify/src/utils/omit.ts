const omit = (obj: { [x: string]: any }, props: any[]) => {
  obj = { ...obj }
  props.forEach((prop: string | number) => delete obj[prop])
  return obj
}

export default omit
