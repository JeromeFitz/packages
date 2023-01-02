import inquirer from 'inquirer'

import { COMMIT_MODES, FIND_BY, LOGS } from '~ccommit/lib'
import {
  cancelIfNeeded,
  findBy,
  formatCommitSubject,
  generateLog,
  registerHookInterruptionHandler,
} from '~ccommit/utils'

import prompts from './prompts'
import withClient from './withClient'
import withHook from './withHook'

export type CommitOptions = {
  message?: string
  mode: typeof COMMIT_MODES.CLIENT | typeof COMMIT_MODES.HOOK
  scope?: string
  skip: boolean
  title?: string
}

/**
 * @todo(ccommit) this is a hacky way to bypass the generator :X
 */
const promptAndCommit = async (options: CommitOptions) => {
  let data: any

  if (options.skip) {
    data = options
    // @note(ccommit) very type is an actual type
    data.gitmoji = findBy(data.type, FIND_BY.TYPE, FIND_BY.EMOJI)
    if (!data.gitmoji) {
      console.log(
        generateLog(LOGS.TYPES.ERROR, LOGS.MESSAGES.TYPE_INCORRECT, data.type)
      )
      process.exit(2)
    }
  } else {
    const questions = prompts(options)
    await inquirer.prompt(questions).then((answers) => {
      // @note(ccommit) set type via which emoji was selected
      answers.type = findBy(answers.gitmoji, FIND_BY.EMOJI, FIND_BY.TYPE)
      if (!answers.gitmoji) {
        console.log(
          generateLog(
            LOGS.TYPES.ERROR,
            LOGS.MESSAGES.TYPE_INCORRECT,
            answers.gitmoji
          )
        )
        process.exit(2)
      }
      data = answers
    })
  }

  const subject = formatCommitSubject(options, data)
  data.subject = subject

  if (options.mode === COMMIT_MODES.HOOK) {
    return withHook(data, options)
  } else {
    return withClient(data, options)
  }
}
const commit = (options: CommitOptions) => {
  if (options.mode === COMMIT_MODES.HOOK) {
    registerHookInterruptionHandler()
    return cancelIfNeeded().then(() => promptAndCommit(options))
  }
  return promptAndCommit(options)
}

export default commit
