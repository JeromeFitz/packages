// biome-ignore lint/complexity/noExtraBooleanCast: migrate
const title = (data: any) => (!!data?.title ? data?.title[0]?.plain_text : null)

export default title
