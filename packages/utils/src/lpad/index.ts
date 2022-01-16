/**
 *
 * @todo Make this dynamic
 */
// const lpad = (value, length, char) => String(value).padStart(length, char)
// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
const lpad = (val: any) => ('00' + val).substr(-2)

export default lpad
