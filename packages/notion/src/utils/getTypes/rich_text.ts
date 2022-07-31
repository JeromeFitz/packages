const rich_text = (data: any) => {
  const dataType = !!data?.results ? 'results' : 'rich_text'
  return data[dataType][0]?.rich_text?.plain_text
}

export default rich_text
