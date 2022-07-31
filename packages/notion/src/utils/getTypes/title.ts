const title = (data: any) => {
  // console.dir(`📛 title`)
  // console.dir(data)
  return !!data?.title ? data?.title[0]?.plain_text : null
}

export default title
