/* eslint-disable @typescript-eslint/ban-ts-comment */
import colors from 'ansi-colors'

import commitTypes from '~ccommit/data/types.js'
import { SCOPE, TITLE } from '~ccommit/lib/index.js'
import {
  formatCliEmoji,
  formatCliType,
  getCharsLeft,
  getIssueTracker,
} from '~ccommit/utils/index.js'

const getTypes = () =>
  commitTypes.map(({ description, emoji, emojiLength, type }) => ({
    emoji,
    emojiLength,
    description,
    type,
  }))

const characterCount = (input, max) => {
  const count = getCharsLeft(input)
  const countMessage = `Character Count (${count}/${max})`
  return `${colors.dim.cyan(`›`)} ${colors.dim.bold(countMessage)}`
}

const prefixState = (state) => {
  return state.submitted
    ? state.cancelled
      ? colors.magenta('✖')
      : colors.green('✔')
    : colors.cyan('?')
}

/**
 * @note(enquirier) 3.x will "fix" skip passing answers for now
 *  you can access "this" state by __not__ using arrow functions
 */
const questions = [
  {
    type: 'confirm',
    name: 'breaking',
    message: 'Is there a breaking change?',
    initial: false,
    default: '(y/N)',
    prefix() {
      // @ts-ignore
      return prefixState(this.state)
    },
    styles: { primary: colors.white },
    format(input) {
      const yn = input ? 'yes' : 'no'
      // @ts-ignore
      return this.state.submitted ? colors.green(yn) : colors.dim(yn)
    },
  },
  {
    name: 'messageBreaking',
    type: 'input',
    message: 'Please share breaking change info',
    skip() {
      // @ts-ignore
      return !this.state.answers.breaking
    },
    result(value) {
      return value ? `BREAKING CHANGE: ${value.trim()}` : ''
    },
    footer() {
      // @ts-ignore
      return characterCount(this.state.input, TITLE.MAX)
    },
    validate(input) {
      const chars = input?.length || 0
      // @ts-ignore
      if (!this.state.answers.breaking) {
        return true
      } else if (chars < 15) {
        return `Must have at least 15 characters`
      } else if (chars > TITLE.MAX) {
        return `Cannot exceed ${TITLE.MAX} characters`
      } else {
        return true
      }
    },
  },
  {
    type: 'autocomplete',
    name: 'gitmoji',
    message: 'Please choose a commit type',
    choices: getTypes().map(({ description, emoji, emojiLength, type }) => {
      const value = emoji
      const name = `  ${formatCliEmoji({
        emoji,
        emojiLength,
      })}  ${formatCliType(type)} ${description}`
      return {
        name,
        value,
      }
    }),
    limit: 18,
    footer() {
      return `${colors.dim.cyan(`›`)} ${colors.dim.bold(
        `scroll up and down to reveal more ↕`,
      )}`
    },
    highlight(str) {
      return colors.cyanBright(str)
    },
  },
  {
    name: 'scope',
    type: 'input',
    message: 'Please share the scope (if any)',
    format() {
      // @ts-ignore
      return this.state.submitted ? colors.green(this.value) : this.value
    },
    footer() {
      // @ts-ignore
      return characterCount(this.state.input, SCOPE.MAX)
    },
    validate(input) {
      const chars = input.length
      if (chars === 0) {
        return true
      } else if (chars < SCOPE.MIN) {
        return `Must have at least ${SCOPE.MIN} characters`
      } else if (chars > SCOPE.MAX) {
        return `Cannot exceed ${SCOPE.MAX} characters`
      } else {
        return true
      }
    },
  },
  {
    name: 'title',
    type: 'input',
    message: 'Please enter the commit title',
    initial: !!getIssueTracker() ? `${getIssueTracker()} ` : '',
    hint() {
      // @ts-ignore
      return this.state.initial ? `… tab to use initial value` : ''
    },
    footer() {
      // @ts-ignore
      return characterCount(this.state.input, TITLE.MAX)
    },
    validate(input) {
      const chars = input.length
      if (chars < TITLE.MIN) {
        return `Must have at least ${TITLE.MIN} characters`
      } else if (chars > TITLE.MAX) {
        return `Cannot exceed ${TITLE.MAX} characters`
      } else {
        return true
      }
    },
  },
  {
    name: 'message',
    type: 'input',
    message: 'Please share a more detailed commit message (if applicable)',
    multiline: true,
    footer() {
      return `${colors.dim.cyan(`›`)} ${colors.dim(
        'Return twice to submit/skip: ⮑  ⮑',
      )}`
    },
    result(input) {
      return input === '\n' ? '' : input
    },
  },
]

export default questions
