import process from 'node:process'

import enquirer from 'enquirer'

import { COMMIT_MODES, FIND_BY, LOGS } from '~ccommit/lib/index.js'
import {
  cancelIfNeeded,
  findBy,
  formatCommitSubject,
  generateLog,
  registerHookInterruptionHandler,
} from '~ccommit/utils/index.js'

import questions from './questions.js'
import withClient from './withClient.js'
import withHook from './withHook.js'

const { prompt } = enquirer

// @todo(NICE-129) eslint
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type CommitOptions = {
  message?: string
  mode: typeof COMMIT_MODES.CLIENT
  // mode: typeof COMMIT_MODES.CLIENT | typeof COMMIT_MODES.HOOK
  scope?: string
  skip: boolean
  title?: string
}

/**
 * @todo(ccommit) this is a hacky way to bypass the generator :X
 */
const promptAndCommit = async (options: CommitOptions) => {
  let data: any = {}

  if (options.skip) {
    data = options
    // @note(ccommit) very type is an actual type
    data.gitmoji = findBy(data.type, FIND_BY.TYPE, FIND_BY.EMOJI)
    if (!data.gitmoji) {
      console.log(
        generateLog(LOGS.TYPES.ERROR, LOGS.MESSAGES.TYPE_INCORRECT, data.type),
      )
      process.exit(2)
    }
  } else {
    // @todo(NICE-129) eslint
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await prompt(questions)
      .then((answers: any) => {
        answers.type = findBy(answers.gitmoji, FIND_BY.EMOJI, FIND_BY.TYPE)
        return answers
      })
      .then((answers) => {
        data = answers
      })
      .catch(console.error)
  }

  // @todo(NICE-129) eslint
  // eslint-disable-next-line no-extra-boolean-cast
  data.subject = !!data ? formatCommitSubject(options, data) : ''

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
