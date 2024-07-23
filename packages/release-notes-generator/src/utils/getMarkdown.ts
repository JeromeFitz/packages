import { commit, contributor, footer, header } from '../templates/index.js'

const getMarkdown = async (context, commits) => {
  const {
    commitGroups,
    currentTag,
    date,
    host,
    issue,
    lastRelease,
    linkCompare,
    linkReferences,
    mentions,
    nextRelease,
    noteGroups,
    notes,
    options,
    owner,
    previousTag,
    references,
    repository,
    repoUrl,
    revert,
    version,
  } = context

  const markdownContext = {
    commitGroups, //  // [{title|commits}]
    currentTag,
    date, // isoString
    host,
    issue, // string
    lastRelease, // version|gitTag|channels|gitHead|name
    linkCompare,
    linkReferences,
    mentions, // []
    nextRelease, // type|channel|gitHead|version|gitTag|name|notes
    noteGroups, // []
    notes,
    options, // from `release.config`
    owner,
    previousTag,
    references, // []
    repository,
    repoUrl,
    revert, // boolean
    version,
  }

  // Object.keys(markdownContext).map((key) => {
  //   console.dir(`>> ${key}:`)
  //   console.dir(markdownContext[key])
  // })

  const repositoryUrl = repository ? host + '/' + owner + '/' + repository : repoUrl

  const meta = {
    repositoryUrl,
  }
  // const meta = {}

  let markdown = ``
  // TEMPLATE
  // HEADER
  markdown += header(markdownContext, commits, meta)
  markdown += `\n`
  // COMMITS
  markdown += commit(markdownContext, commits, meta)
  markdown += `\n`
  // CONTRIBUTORS
  markdown += await contributor(markdownContext, commits, meta)
  markdown += `\n`
  // FOOTER (NOTES)
  markdown += footer(markdownContext, commits, meta)
  markdown += `\n`

  return markdown
}

export { getMarkdown }
