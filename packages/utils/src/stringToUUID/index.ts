/* eslint-disable @typescript-eslint/restrict-plus-operands */
/**
 * @note This is pretty hacky to say the least 🤣️
 */
const stringToUUID = (i: string) => {
  if (i.length !== 32) return i
  return (
    i.substring(0, 8) +
    '-' +
    i.substring(8, 4) +
    '-' +
    i.substring(12, 4) +
    '-' +
    i.substring(16, 4) +
    '-' +
    i.substring(20)
  )
}

export default stringToUUID
