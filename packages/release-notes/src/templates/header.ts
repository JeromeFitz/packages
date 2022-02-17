/* eslint-disable @typescript-eslint/restrict-plus-operands */
import _format from 'date-fns/format'

const header = (context, commits, meta) => {
  // @todo(release-notes) pass as option
  // console.dir(`> header`)
  // console.dir(context)

  const { currentTag, date, linkCompare, previousTag, title } = context
  const { repositoryUrl } = meta

  let markdown = `
| 🔖️ | Release Information      |
| ----------- | --------------- |
| Current     | **\`${currentTag}\`** |\n`

  if (linkCompare) {
    const linkCompareUrl =
      repositoryUrl + '/compare/' + previousTag + '...' + currentTag
    markdown += `| Previous    | **[\`${previousTag}\`](${linkCompareUrl})** |\n`
  }
  if (title) {
    markdown += `| Title       | **\`${title}\`** |\n`
  }
  if (date) {
    markdown += `| Date        | **\`${_format(date, 'yyyy-MM-dd')}\`** |\n`
  }

  markdown += `\n`
  return markdown
}

export { header }
