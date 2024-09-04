/* eslint-disable import-x/no-named-as-default-member */
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
    description,
    emoji,
    emojiLength,
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
    default: '(y/N)',
    format(input) {
      const yn = input ? 'yes' : 'no'
      // @ts-ignore
      return this.state.submitted ? colors.green(yn) : colors.dim(yn)
    },
    initial: false,
    message: 'Is there a breaking change?',
    name: 'breaking',
    prefix() {
      // @ts-ignore
      return prefixState(this.state)
    },
    styles: { primary: colors.white },
    type: 'confirm',
  },
  {
    footer() {
      // @ts-ignore
      return characterCount(this.state.input, TITLE.MAX)
    },
    message: 'Please share breaking change info',
    name: 'messageBreaking',
    result(value) {
      return value ? `BREAKING CHANGE: ${value.trim()}` : ''
    },
    skip() {
      // @ts-ignore
      return !this.state.answers.breaking
    },
    type: 'input',
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
    footer() {
      return `${colors.dim.cyan(`›`)} ${colors.dim.bold(
        `scroll up and down to reveal more ↕`,
      )}`
    },
    highlight(str) {
      return colors.cyanBright(str)
    },
    limit: 18,
    message: 'Please choose a commit type',
    name: 'gitmoji',
    type: 'autocomplete',
  },
  {
    footer() {
      // @ts-ignore
      return characterCount(this.state.input, SCOPE.MAX)
    },
    format() {
      // @ts-ignore
      return this.state.submitted ? colors.green(this.value) : this.value
    },
    message: 'Please share the scope (if any)',
    name: 'scope',
    type: 'input',
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
    footer() {
      // @ts-ignore
      return characterCount(this.state.input, TITLE.MAX)
    },
    hint() {
      // @ts-ignore
      return this.state.initial ? `… tab to use initial value` : ''
    },
    // @todo(NICE-129) eslint
    // eslint-disable-next-line no-extra-boolean-cast
    initial: !!getIssueTracker() ? `${getIssueTracker()} ` : '',
    message: 'Please enter the commit title',
    name: 'title',
    type: 'input',
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
    footer() {
      return `${colors.dim.cyan(`›`)} ${colors.dim(
        'Return twice to submit/skip: ⮑  ⮑',
      )}`
    },
    message: 'Please share a more detailed commit message (if applicable)',
    multiline: true,
    name: 'message',
    result(input) {
      return input === '\n' ? '' : input
    },
    type: 'input',
  },
]

export default questions
