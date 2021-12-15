/* eslint-disable id-match */
import inquirer from 'inquirer'
import AutocompletePrompt from 'inquirer-list-search-prompt'
import _filter from 'lodash/filter.js'
import _map from 'lodash/map.js'

import LimitedInputPrompt from './LimitedInputPrompt'
import questionConfig, { TYPE_BRANCH, TYPE_COMMIT } from './questionConfig'

inquirer.registerPrompt('autocomplete', AutocompletePrompt)
inquirer.registerPrompt('limitedInput', LimitedInputPrompt)

const runInteractiveQuestions = async (state, cliAnswers, cliOptions) => {
  if (!Boolean(cliAnswers)) {
    throw new Error('No `cliAnswers` passed to runInteractiveQuestions')
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  Object.keys(cliAnswers).forEach((key) => {
    state.answers[key] = cliAnswers[key]
  })

  let questionsOrder
  switch (cliOptions.mode) {
    case TYPE_BRANCH:
      questionsOrder = state.config.branch.questions

      break
    case TYPE_COMMIT:
    default:
      questionsOrder = state.config.commit.questions

      break
  }

  // @note(validation) double-check we have a question type
  const branchFlag = Boolean(cliOptions.mode === TYPE_BRANCH)

  // @todo(config) get this value from config
  const bodyFlag = false
  const questionsAvailable = questionConfig(state, branchFlag, bodyFlag)

  const questionsOrderCheck = _filter(questionsOrder, (question) =>
    Boolean(questionsAvailable[question])
  )

  const questions = _map(
    questionsOrderCheck,
    (question) => questionsAvailable[question]
  )
  const answers = await inquirer.prompt(_map(questions, (question) => question))

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  Object.keys(state.answers).forEach((key) => {
    if (answers[key]) {
      state.answers[key] = answers[key]
    }
  })

  return answers
}

export default runInteractiveQuestions
