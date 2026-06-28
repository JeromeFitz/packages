import type { MarkdownContext, NoteGroup, RenderMeta } from '../types'

import { describe, expect, it } from 'vitest'

import { footer } from './footer'

const baseMeta: RenderMeta = { repositoryUrl: 'https://github.com/owner/repo' }

function makeContext(noteGroups: NoteGroup[]): MarkdownContext {
  return {
    commit: 'commit',
    commitGroups: [],
    currentTag: 'v1.0.0',
    host: 'https://github.com',
    issue: 'issues',
    linkCompare: false,
    noteGroups,
    owner: 'owner',
    previousTag: 'v0.9.0',
    repository: 'repo',
    version: '1.0.0',
  }
}

describe('footer template', () => {
  it('returns empty string for no note groups', () => {
    expect(footer(makeContext([]), [], baseMeta)).toBe('')
  })

  it('renders each note group title', () => {
    const ctx = makeContext([
      {
        notes: [{ text: 'breaks the API', title: 'BREAKING CHANGE' }],
        title: 'BREAKING CHANGE',
      },
    ])
    const result = footer(ctx, [], baseMeta)
    expect(result).toContain('#### BREAKING CHANGE')
  })

  it('renders note text', () => {
    const ctx = makeContext([
      {
        notes: [{ text: 'breaks the API', title: 'BREAKING CHANGE' }],
        title: 'BREAKING CHANGE',
      },
    ])
    expect(footer(ctx, [], baseMeta)).toContain('breaks the API')
  })

  it('renders scope in bold when present', () => {
    const ctx = makeContext([
      {
        notes: [{ scope: 'auth', text: 'removed login', title: 'BREAKING CHANGE' }],
        title: 'BREAKING CHANGE',
      },
    ])
    expect(footer(ctx, [], baseMeta)).toContain('**auth**')
  })

  it('omits scope markup when scope is absent', () => {
    const ctx = makeContext([
      {
        notes: [{ text: 'removed login', title: 'BREAKING CHANGE' }],
        title: 'BREAKING CHANGE',
      },
    ])
    expect(footer(ctx, [], baseMeta)).not.toContain('**')
  })

  it('renders multiple groups', () => {
    const ctx = makeContext([
      {
        notes: [{ text: 'break one', title: 'BREAKING CHANGE' }],
        title: 'BREAKING CHANGE',
      },
      {
        notes: [{ text: 'deprecated stuff', title: 'DEPRECATED' }],
        title: 'DEPRECATED',
      },
    ])
    const result = footer(ctx, [], baseMeta)
    expect(result).toContain('#### BREAKING CHANGE')
    expect(result).toContain('#### DEPRECATED')
  })

  it('matches snapshot', () => {
    const ctx = makeContext([
      {
        notes: [
          { scope: 'api', text: 'old endpoint removed', title: 'BREAKING CHANGE' },
          { text: 'another break', title: 'BREAKING CHANGE' },
        ],
        title: 'BREAKING CHANGE',
      },
    ])
    expect(footer(ctx, [], baseMeta)).toMatchSnapshot()
  })
})
