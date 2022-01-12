const stringToUUID = (i: string) => {
  if (i.length !== 32) return i
  return (
    i.substr(0, 8) +
    '-' +
    i.substr(8, 4) +
    '-' +
    i.substr(12, 4) +
    '-' +
    i.substr(16, 4) +
    '-' +
    i.substr(20)
  )
}

export default stringToUUID
