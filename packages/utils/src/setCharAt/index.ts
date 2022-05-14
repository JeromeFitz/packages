function setCharAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) return str
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return str.substring(0, index) + chr + str.substring(index + 1)
}

export default setCharAt
