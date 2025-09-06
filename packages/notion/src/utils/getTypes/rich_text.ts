const rich_text = (data: any) =>
  // biome-ignore lint/complexity/noExtraBooleanCast: migrate
  !!data?.rich_text ? data?.rich_text[0]?.plain_text : null

export default rich_text
