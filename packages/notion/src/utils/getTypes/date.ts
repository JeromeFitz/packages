const date = (data: any) => {
  const { type } = data
  return data[type]
}

export default date
