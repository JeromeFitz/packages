/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable id-match */
import chalkPipe from 'chalk-pipe'
import _map from 'lodash/map'

import { findChoice, findScope } from './findSource'
import getBranchName from './getBranchName'

const TYPE_BRANCH = 'branch'
const TYPE_COMMIT = 'commit'

const answerBranchName = (state, input, answers, isFilter = true) => {
  const branchTypePrefix = answers.branchFlag
    ? `${answers.branchTypes}/`
    : state.config.branch.prefix

  const branchTypePrefixTemp = isFilter
    ? branchTypePrefix
    : chalkPipe('blue.bold')(branchTypePrefix)

  const branchName = input
    .replace(/ {2}/g, '--')
    .replace(/ /g, '-')
    .toLowerCase()
    .trim()

  const branchNameFilter = answers.branchFlag
    ? branchName
    : `${state.config.branch.prefix}${branchName}`

  const branchNameTransformer = state.config.branch.format
    .replace(/\{branchType\}/g, branchTypePrefixTemp)
    .replace(/\{branchName\}/g, chalkPipe('bold')(branchName))

  return isFilter ? branchNameFilter : branchNameTransformer
}

const answerBreaking = (input = '', answers, isFilter = true) => {
  const breakingLabel = '💥️  BREAKING CHANGE: '
  const breakingPrefix = answers.commitBreakingFlag ? breakingLabel : ''

  const breakingPrefixTemp = isFilter
    ? breakingPrefix
    : chalkPipe('red.bold')(breakingPrefix)

  const breaking = input.trim()

  const breakingFilter = `\n\n${breakingPrefix}${breaking}`

  const breakingTransformer = '{b1}{b2}'
    .replace(/\{b1\}/g, breakingPrefixTemp)
    .replace(/\{b2\}/g, chalkPipe('bold')(breaking))

  return isFilter ? breakingFilter : breakingTransformer
}

const questionConfig = (state, branchFlag, commitBodyFlag) => ({
  branchFlag: {
    default: branchFlag,

    message() {
      return Boolean(branchFlag)
        ? '> branchFlag (gitflow prefix):'
        : '> branchFlag (add to subject):'
    },
    name: 'branchFlag',
    type: 'confirm',
  },
  branchName: {
    filter: (input, answers) => answerBranchName(state, input, answers),
    message: '> branchName:',
    name: 'branchName',
    transformer(input, answers) {
      return answerBranchName(state, input, answers, false)
    },
    type: 'input',
  },
  branchTypes: {
    choices: _map(state.types.branch, (type) => type.branch),
    message: '> branchTypes:',
    name: 'branchTypes',
    source: (_answers, input) => findChoice(input, state.types.branch, 'branch'),
    type: 'autocomplete',
    when(answers) {
      return answers.branchFlag
    },
  },
  commitBody: {
    message: '> commitBody:',
    name: 'commitBody',
    type: 'editor',
    when(answers) {
      return answers.commitBodyFlag
    },
  },
  commitBodyFlag: {
    default: commitBodyFlag,
    message: '> commitBodyFlag',
    name: 'commitBodyFlag',
    type: 'confirm',
  },
  commitBreaking: {
    filter: (input, answers) => answerBreaking(input, answers),
    message: '> commitBreaking:',
    name: 'commitBreaking',
    transformer(input, answers) {
      return answerBreaking(input, answers, false)
    },
    type: 'input',
    when(answers) {
      return answers.commitBreakingFlag
    },
  },
  commitBreakingFlag: {
    default: false,
    message: '> commitBreakingFlag:',
    name: 'commitBreakingFlag',
    type: 'confirm',
  },
  commitMessage: {
    commitMessage: '> commitMessage',
    name: 'message',
    type: 'editor',
  },
  commitScopes: {
    message: '> commitScopes:',
    name: 'commitScopes',
    source: (_answers, input) => findScope(input, state.config.commit.scopes),
    type: 'autocomplete',
    when() {
      if (!state.config.commit.scopes) {
        return false
      }
      if (!Array.isArray(state.config.commit.scopes)) {
        return false
      }
      if (state.config.commit.scopes.length < 1) {
        return false
      }

      return true
    },
  },
  commitSubject: {
    filter: (input) => input.trim(),
    leadingLabel: (answers) => {
      const branchName = Boolean(answers.branchFlag)
        ? state.config.commit.before.branchName +
          getBranchName().split('/').slice(-1)[0] +
          state.config.commit.after.branchName
        : ''

      const emoji =
        state.config.commit.before.emoji +
        state.types.commit[answers.commitTypes].emoji +
        state.config.commit.after.emoji

      const scope = answers.commitScopes
        ? state.config.commit.before.scope +
          answers.commitScopes.trim() +
          state.config.commit.after.scope
        : ''

      const type = answers.commitTypes

      return state.config.commit.format
        .replace(/\{emoji\}/g, emoji)
        .replace(/\{scope\}/g, scope)
        .replace(/\{branchName\}/g, branchName)
        .replace(/\{subject\}/g, '')
        .replace(/\{type\}/g, type)
    },
    maxLength: state.config.commit.maxMessageLength,
    message: '> commitSubject:',
    name: 'commitSubject',
    source: (_answers, input) => findChoice(input, state.types.commit, 'commit'),
    type: 'limitedInput',
    validate: (input) => {
      const minMessageLength = state.config.commit.minMessageLength
      const minTitleLengthErrorMessage = `The subject must have at least ${minMessageLength} chars`

      return input.length >= minMessageLength || minTitleLengthErrorMessage
    },
  },
  commitTypes: {
    choices: _map(state.types.commit, (type) => type.commit),
    message: '> commitTypes:',
    name: 'commitTypes',
    source: (_answers, input) => findChoice(input, state.types.commit, 'commit'),
    type: 'autocomplete',
  },
})

export { TYPE_BRANCH, TYPE_COMMIT }
export default questionConfig
