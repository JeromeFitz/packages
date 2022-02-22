import { Octokit } from '@octokit/rest'
import _findIndex from 'lodash/findIndex'
import _uniqBy from 'lodash/uniqBy'

const gh = new Octokit({ auth: process.env.GH_TOKEN })

/**
 * @hack
 * remove these logins from contribtuors
 *
 * reason JeromeFitz is here is because most of the time
 *  they are the only one making them in this repo ,haha
 *
 * maybe this should be a configuration setting?
 *
 */
const ejectLogins = [
  'JeromeFitz',
  'dependabot[bot]',
  'kodiakhq[bot]',
  'dependabot',
  'kodiakhq',
]

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
          if (!!login && login !== 'JeromeFitz') {
            authors[authorIdx]['login'] = `@` + login
            return login
          }
          return ''
        })
    )
  )

  // @note could we lift this better somehow and reduce API calls?
  ejectLogins.map((eject) => authors.splice(_findIndex(authors, ['login', eject])))

  let markdown = ``
  if (authors.length > 0) {
    // @todo(release-notes) pass title as configuration option
    markdown += `#### 🥳️  Contributors\n`
    const authorsString = authors.map((author: any) => author.login).join(',')
    markdown += `- ${authorsString}`
  }
  return markdown
}

export { contributor }
