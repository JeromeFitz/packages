const rich_text = (data: any) =>
  // @todo(NICE-129) eslint
  // eslint-disable-next-line no-extra-boolean-cast
  !!data?.rich_text ? data?.rich_text[0]?.plain_text : null

export default rich_text
