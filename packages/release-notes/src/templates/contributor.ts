import { Octokit } from '@octokit/rest'
import _uniqBy from 'lodash/uniqBy'

const gh = new Octokit({ auth: process.env.GH_TOKEN })

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const contributor = async (context, commits, meta) => {
  const authors = _uniqBy(
    commits.map((commit) => ({
      email: commit.committer.email,
      name: commit.committer.name,
    })),
    'name'
  )

  await Promise.all(
    authors.map((author: any, authorIdx) =>
      gh
        .request('GET /search/users', {
          q: author.email,
        })
        .then(({ data }) => {
          const login = data.items[0]?.login
          if (!!login) {
            authors[authorIdx]['login'] = `@` + login
            return login
          }
          return ''
        })
    )
  )

  // @todo(release-notes) if only author is JeromeFitz, skip 😇️
  // @todo(release-notes) pass as option
  let markdown = `#### 🥳️  Contributors\n`
  const authorsString = authors.map((author: any) => author.login).join(',')
  markdown += `- ${authorsString}`

  return markdown
}

export { contributor }
