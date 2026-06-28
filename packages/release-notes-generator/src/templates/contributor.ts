import type { MarkdownContext, RenderMeta, TransformedCommit } from '../types'

import { Octokit } from '@octokit/rest'

const gh = new Octokit({ auth: process.env.GH_TOKEN })

interface Author {
  email: string
  login?: string
  name: string
}

const contributorsProhibitListDefault = {
  email: [
    'noreply@github.com',
    'users.noreply.github.com',
    'semantic-release-bot@martynus.net',
  ],
  login: [
    'dependabot',
    'dependabot[bot]',
    'kodiakhq',
    'kodiakhq[bot]',
    'renovate',
    'renovate[bot]',
    'semantic-release-bot',
  ],
}

const contributorsSubtitle = [
  'Props to',
  'Kudos to',
  'Thanks to',
  'Brought to you by',
]

const sample = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

const uniqByName = (authors: Author[]): Author[] => {
  const seen = new Map<string, Author>()
  for (const a of authors) {
    if (!seen.has(a.name)) seen.set(a.name, a)
  }
  return [...seen.values()]
}

const contributor = async (
  context: MarkdownContext,
  commits: TransformedCommit[],
  _meta: RenderMeta,
): Promise<string> => {
  const authors = uniqByName(
    commits.map((c) => ({
      email: c.author?.email ?? '',
      name: c.author?.name ?? '',
    })),
  )

  await Promise.all(
    authors.map((author, idx) =>
      gh.request('GET /search/users', { q: author.email }).then(({ data }) => {
        const login = data.items[0]?.login
        if (login) authors[idx].login = login
      }),
    ),
  )

  const prohibitList = context.options?.contributorsProhibitList ?? {
    email: [],
    login: [],
  }

  const prohibitLogins = [
    ...contributorsProhibitListDefault.login,
    ...prohibitList.login,
  ]
  for (const ejectLogin of prohibitLogins) {
    const idx = authors.findIndex((a) => a.login === ejectLogin)
    if (idx !== -1) authors.splice(idx, 1)
  }

  const prohibitEmails = [
    ...contributorsProhibitListDefault.email,
    ...prohibitList.email,
  ]
  for (const ejectEmail of prohibitEmails) {
    const idx = authors.findIndex((a) => a.email.includes(ejectEmail))
    if (idx !== -1) authors.splice(idx, 1)
  }

  if (authors.length === 0) return ''

  const authorsString = authors.map((a) => `@${a.login}`).join(', ')
  let markdown = `#### 🥳️  Contributors\n`
  markdown += `- ${sample(contributorsSubtitle)} ${authorsString}\n`
  markdown += '\n'

  return markdown
}

export { contributor }
