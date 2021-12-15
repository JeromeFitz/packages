// @note(typescript) need to grab the built version for testing
import isCI from 'is-ci'

!isCI && require('dotenv').config({ path: './.env' })
import config from './src/themes/gitmoji'

const OVERRIDE_TEST = false

const enabled = (OVERRIDE_TEST && (process.env.GIT_CZ || !OVERRIDE_TEST)) || true

const typesCustom = {
  override: {
    branch: false,
    code: ':sunrise_over_mountains:',
    commit: 'override',
    description: 'Custom type => override.',
    emoji: '🌄️',
    entity: '&#1F304;',
    name: 'override',
    section: 'Custom type => override.',
    semver: null,
  },
}

const commit = OVERRIDE_TEST
  ? {
      after: { ...config.commit.after, scope: '): ' },
      before: { ...config.commit.before, scope: '(' },
      format: '{type}{scope}{subject}',
      maxMessageLength: 64,
      minMessageLength: 3,
      questions: ['commitScopes', 'commitTypes', 'commitSubject'],
      scopes: ['', 'app'],
    }
  : config.commit

const branch = OVERRIDE_TEST
  ? {
      format: '{branchType}{branchName}',
      prefix: 'ABC-',
      questions: ['branchFlag', 'branchTypes', 'branchName'],
      url: 'https://abc.atlassian.net/browse/',
    }
  : config.branch

const types = OVERRIDE_TEST ? { ...config.types, ...typesCustom } : config.types

const changelog = { ...config, branch, commit, enabled, types }

export default changelog
