// @todo(NICE-129) eslint
// eslint-disable-next-line no-extra-boolean-cast
const title = (data: any) => (!!data?.title ? data?.title[0]?.plain_text : null)

export default title
