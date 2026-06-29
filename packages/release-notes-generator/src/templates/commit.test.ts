import type {
  CommitGroup,
  MarkdownContext,
  RenderMeta,
  TransformedCommit,
} from '../types'

import { describe, expect, it } from 'vitest'

import { commit } from './commit'

const baseMeta: RenderMeta = { repositoryUrl: 'https://github.com/owner/repo' }

const typeSpec = {
  code: ':sparkles:',
  description: 'Add New Feature',
  emoji: '✨',
  semver: 'minor' as const,
  type: 'feat',
  value: 'feat',
}

function makeCommit(overrides: Partial<TransformedCommit> = {}): TransformedCommit {
  return {
    author: { email: 'test@example.com', name: 'Test' },
    body: null,
    footer: null,
    hash: 'abc1234',
    header: '✨ (scope): add feature',
    mentions: [],
    merge: null,
    message: '✨ (scope): add feature',
    notes: [],
    references: [],
    revert: null,
    scope: 'scope',
    subject: 'add feature',
    type: '✨  Add New Feature',
    typeSpec,
    typeSpecIndex: 0,
    ...overrides,
  }
}

function makeContext(
  commits: TransformedCommit[],
  overrides: Partial<MarkdownContext> = {},
): MarkdownContext {
  const groups: CommitGroup[] = []
  const seenTypes = new Set<string>()
  for (const c of commits) {
    if (!seenTypes.has(c.typeSpec.type)) {
      seenTypes.add(c.typeSpec.type)
      groups.push({
        commits: commits.filter((x) => x.typeSpec.type === c.typeSpec.type),
        order: 10,
        title: c.type,
      })
    }
  }
  return {
    commit: 'commit',
    commitGroups: groups,
    currentTag: 'v1.0.0',
    host: 'https://github.com',
    issue: 'issues',
    linkCompare: false,
    noteGroups: [],
    owner: 'owner',
    previousTag: 'v0.9.0',
    repository: 'repo',
    version: '1.0.0',
    ...overrides,
  }
}

describe('commit template', () => {
  it('returns empty string for no commit groups', () => {
    const ctx: MarkdownContext = {
      commit: 'commit',
      commitGroups: [],
      currentTag: 'v1.0.0',
      host: 'https://github.com',
      issue: 'issues',
      linkCompare: false,
      noteGroups: [],
      owner: 'owner',
      previousTag: 'v0.9.0',
      repository: 'repo',
      version: '1.0.0',
    }
    expect(commit(ctx, [], baseMeta)).toBe('')
  })

  it('renders the group type as a heading', () => {
    const c = makeCommit()
    const result = commit(makeContext([c]), [c], baseMeta)
    expect(result).toContain('#### ✨  Add New Feature')
  })

  it('renders subject when present', () => {
    const c = makeCommit({ subject: 'add feature' })
    const result = commit(makeContext([c]), [c], baseMeta)
    expect(result).toContain('add feature')
  })

  it('falls back to header when subject is null', () => {
    const c = makeCommit({ header: '✨ the header', subject: null })
    const result = commit(makeContext([c]), [c], baseMeta)
    expect(result).toContain('the header')
  })

  it('renders scope in bold when present', () => {
    const c = makeCommit({ scope: 'auth' })
    const result = commit(makeContext([c]), [c], baseMeta)
    expect(result).toContain('**auth**')
  })

  it('omits scope markup when scope is null', () => {
    const c = makeCommit({ scope: null })
    const result = commit(makeContext([c]), [c], baseMeta)
    expect(result).not.toContain('**')
  })

  it('renders plain hash when linkReferences is false', () => {
    const c = makeCommit({ hash: 'abc1234' })
    const result = commit(makeContext([c], { linkReferences: false }), [c], baseMeta)
    expect(result).toContain('abc1234')
    expect(result).not.toContain('](')
  })

  it('renders linked hash when linkReferences is true', () => {
    const c = makeCommit({ hash: 'abc1234' })
    const result = commit(makeContext([c], { linkReferences: true }), [c], baseMeta)
    expect(result).toContain('`abc1234`')
    expect(result).toContain('https://github.com/owner/repo/commit/abc1234')
  })

  it('renders issue references when present', () => {
    const c = makeCommit({
      references: [
        {
          action: 'closes',
          issue: '123',
          owner: null,
          prefix: '#',
          raw: '#123',
          repository: null,
        },
      ],
    })
    const result = commit(makeContext([c]), [c], baseMeta)
    expect(result).toContain('closes')
    expect(result).toContain('#123')
  })

  it('matches snapshot', () => {
    const c = makeCommit({ hash: 'abc1234', scope: 'auth', subject: 'add login' })
    expect(
      commit(makeContext([c], { linkReferences: true }), [c], baseMeta),
    ).toMatchSnapshot()
  })
})
