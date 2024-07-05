// @todo(NICE-129) eslint
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const omit = (obj: { [x: string]: any }, props: any[]) => {
  obj = { ...obj }
  props.forEach((prop: number | string) => delete obj[prop])
  return obj
}

export default omit
