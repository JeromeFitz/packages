import { Octokit } from '@octokit/rest'
import _findIndex from 'lodash/findIndex'
import _sample from 'lodash/sample'
import _uniqBy from 'lodash/uniqBy'

const gh = new Octokit({ auth: process.env.GH_TOKEN })

interface IAuthor {
  email: string
  name: string
  login?: string
}

/**
 * @hack
 * remove these logins from contributors
 *
 * reason JeromeFitz is here is because most of the time
 *  they are the only one making them in this repo ,haha
 *
 * maybe these should be a configuration setting?
 *
 */
const contributorsProhibitListDefault = {
  login: [
    'dependabot',
    'dependabot[bot]',
    'kodiakhq',
    'kodiakhq[bot]',
    'semantic-release-bot',
  ],
  email: [
    'noreply@github.com',
    'users.noreply.github.com',
    'semantic-release-bot@martynus.net',
  ],
}

const contributorsSubtitle = [
  'Props to',
  'Kudos to',
  'Thanks to',
  'Brought to you by',
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const contributor = async (context, commits, meta) => {
  const authors = _uniqBy(
    commits.map(
      (commit): IAuthor => ({
        email: commit.author.email,
        name: commit.author.name,
      })
    ),
    'name'
  )

  const {
    options: { contributorsProhibitList },
  } = context

  // console.dir(`> context`)
  // console.dir(context)

  await Promise.all(
    authors.map((author: any, authorIdx) =>
      gh
        .request('GET /search/users', {
          q: author.email,
        })
        .then(({ data }) => {
          const login = data.items[0]?.login
          if (!!login) {
            authors[authorIdx]['login'] = login
            return login
          }
          return ''
        })
    )
  )

  // @note could we lift this better somehow and reduce API calls?
  const contributorsProhibitListLogin = [
    ...contributorsProhibitListDefault.login,
    ...contributorsProhibitList.login,
  ]
  contributorsProhibitListLogin.map((eject) => {
    const ejectIndex = _findIndex(authors, ['login', eject])
    if (ejectIndex !== -1) authors.splice(ejectIndex)
  })
  const contributorsProhibitListEmail = [
    ...contributorsProhibitListDefault.email,
    ...contributorsProhibitList.email,
  ]
  contributorsProhibitListEmail.map((eject) => {
    const ejectIndex = _findIndex(authors, (author: any) =>
      author.email.includes(eject)
    )
    if (ejectIndex !== -1) authors.splice(ejectIndex)
  })

  let markdown = ``
  if (authors.length > 0) {
    // @todo(release-notes) pass title as configuration option
    markdown += `#### 🥳️  Contributors\n`
    const authorsString = authors.map((author: any) => `@${author.login}`).join(', ')
    markdown += `- ${_sample(contributorsSubtitle)} ${authorsString}\n`
    // markdown += `\n---\n`
    // markdown += _sample(contributorKudos)!(
    //   authors.map((author: any) => author.login).join(',')
    // )
    markdown += `\n`
  }

  return markdown
}

export { contributor }
