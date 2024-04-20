/**
 *
 * @todo Make this dynamic
 */
// const lpad = (value, length, char) => String(value).padStart(length, char)
const lpad = (val: any) => ('00' + val).substr(-2)

export default lpad
