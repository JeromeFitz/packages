import inquirer from 'inquirer'
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt'

import commitTypes from '~ccommit/data/types'
import { SCOPE, TITLE } from '~ccommit/lib'
import {
  filterGitmojis,
  formatCliEmoji,
  formatCliType,
  getDefaultCommitContent,
  getEmojis,
  PromptInputLimited,
  PromptInputPrepopulateLimited,
} from '~ccommit/utils'

import validate from './validate'

const gitmojis = getEmojis(commitTypes)

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt)
inquirer.registerPrompt('inputLimited', PromptInputLimited)
inquirer.registerPrompt('inputPrepopulateLimited', PromptInputPrepopulateLimited)

type Gitmoji = {
  code: string
  description: string
  emoji: string
  name: string
}

type Answers = {
  gitmoji: string
  scope?: string
  title: string
  message: string
}

const searchCommitTypes = (answersSoFor: any, input: string) => {
  return filterGitmojis(input, gitmojis).map((gitmoji) => ({
    name: ` ${formatCliEmoji({
      emoji: gitmoji.emoji,
      emojiLength: gitmoji.emojiLength,
    })} ${formatCliType(gitmoji.type)} ${gitmoji.description}`,
    value: gitmoji.emoji,
  }))
}

const prompts = (options) => {
  const { title, message, scope } = getDefaultCommitContent(options)

  return [
    {
      name: 'breaking',
      type: 'confirm',
      message: 'Is there a breaking change?:',
      default: false,
    },
    {
      name: 'messageBreaking',
      type: 'input',
      message: 'Please share breaking change information:',
      filter: (answer) => `BREAKING CHANGE: ${answer.trim()}`,
      when: (answers) => answers.breaking,
    },
    {
      name: 'gitmoji',
      message: 'Choose a commit type:',
      type: 'autocomplete',
      source: searchCommitTypes,
      filter: (answer) => answer.trim(),
    },
    {
      name: 'scope',
      type: 'inputLimited',
      inputMin: SCOPE.MIN,
      inputMax: SCOPE.MAX,
      message: 'Enter the scope (if any)',
      validate: validate.scope,
      filter: (answer) => answer.trim(),
      transformer: (input: string) => {
        const count = input.length
        return `(${count}/${SCOPE.MAX}): ${input}`
      },
      ...(scope ? { default: scope } : {}),
    },
    {
      type: 'inputPrepopulateLimited',
      name: 'title',
      inputMax: TITLE.MAX,
      inputMin: TITLE.MIN,
      message: 'Enter the commit title',
      validate: validate.title,
      filter: (answer: string) => answer.trim(),
      transformer: (input: string) => {
        const count = validate.getCharsLeftText(input)
        return `(${count}/${TITLE.MAX}): ${input}`
      },
      ...(title ? { default: title } : {}),
    },
    {
      name: 'message',
      message: 'Enter the commit message:',
      ...(message ? { default: message } : {}),
    },
  ]
}

export type { Answers, Gitmoji }
export default prompts
