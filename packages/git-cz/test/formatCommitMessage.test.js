/* eslint-disable sort-keys */
import { expect } from 'chai'

import { formatCommitMessage } from '../lib/formatCommitMessage'

const originalConfig = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  breakingChangePrefix: '🧨 ',
  closedIssuePrefix: '✅ ',
  closedIssueMessage: 'Closes: ',
  commitMessageFormat: '<type><(scope)>: <emoji><subject>',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  theme: 'original',
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI related changes',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: 'A new feature',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Adding missing tests',
      emoji: '💍',
      value: 'test',
    },
  },
}

const themeTypes = {
  default: {
    chore: {
      code: ':computer_disk:',
      description: 'Changes that don’t modify src or test files',
      emoji: '💽️',
      entity: '&#x1f4bd;',
      hidden: false,
      name: 'computer-disk',
      release: null,
      section: 'Changes that don’t modify src or test files',
      semver: null,
      value: 'chore',
    },
    rip: {
      code: ':coffin:',
      description: 'Remove dead code.',
      emoji: '⚰️',
      entity: '&#x26B0;',
      hidden: false,
      name: 'coffin',
      release: null,
      section: 'Remove dead code.',
      semver: null,
      value: 'rip',
    },
  },
}

const defaultState = {
  answers: {
    body: '',
    breaking: '',
    issues: '',
    lerna: '',
    scope: '',
    subject: 'First commit',
    type: 'feat',
  },
  config: originalConfig,
}

describe('formatCommitMessage()', () => {
  it('does not include emoji, if emojis disabled in config (no scope)', () => {
    const theme = 'original'
    const message = formatCommitMessage({
      ...defaultState,
      config: {
        ...originalConfig,
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('feat: First commit')
  })

  it('does not include emoji, if emojis disabled in config (with scope)', () => {
    const theme = 'original'
    const message = formatCommitMessage({
      ...defaultState,
      answers: {
        ...defaultState.answers,
        scope: 'init',
      },
      config: {
        ...originalConfig,
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('feat(init): First commit')
  })

  it('does not include emoji, if emojis disabled in config (custom)', () => {
    const theme = 'original'
    const message = formatCommitMessage({
      ...defaultState,
      answers: {
        ...defaultState.answers,
        scope: 'init',
      },
      config: {
        ...originalConfig,
        format: '{subject} :{scope}{type}',
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('First commit :(init)feat')
  })

  it('does not include emoji, if emojis disabled in config (dynamic custom)', () => {
    const isDynamic = true
    const theme = 'original'
    const message = formatCommitMessage({
      ...defaultState,
      answers: {
        ...defaultState.answers,
        scope: 'init',
      },
      config: {
        ...originalConfig,
        format: `{subject} :{scope}{type}${isDynamic && ' '}`,
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('First commit :(init)feat ')
  })

  it('theme => default (no difference with feat)', () => {
    const theme = 'default'
    const message = formatCommitMessage({
      ...defaultState,
      config: {
        ...originalConfig,
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('feat: First commit')
  })

  it('theme => default (unique type)', () => {
    const theme = 'default'
    const message = formatCommitMessage({
      ...defaultState,
      answers: {
        ...defaultState.answers,
        subject: 'Last commit',
        type: 'rip',
      },
      config: {
        ...originalConfig,
        disableEmoji: true,
        theme,
        types: themeTypes[theme],
      },
    })

    expect(message).equal('rip: Last commit')
  })
})
