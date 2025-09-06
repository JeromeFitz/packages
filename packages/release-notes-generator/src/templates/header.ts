import { format as _format } from 'date-fns'

const header = (context, _commits, meta) => {
  // @todo(release-notes) pass as option
  const { currentTag, date, linkCompare, previousTag, title } = context
  const { repositoryUrl } = meta

  let markdown = `
| 🔖️ | Release Information      |
| ----------- | --------------- |
| Current     | **\`${currentTag}\`** |\n`

  if (linkCompare) {
    const linkCompareUrl =
      // biome-ignore lint/style/useTemplate: migrate
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
