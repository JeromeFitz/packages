import isEnabled from './utils/isEnabled.js'
import parseArgs from './utils/parseArgs.js'
import { TYPE_BRANCH, TYPE_COMMIT } from './utils/questionConfig.js'
import runInteractiveQuestions from './utils/runInteractiveQuestions.js'
import setBranch from './utils/setBranch.js'
import { getCommitMessage } from './utils/setCommit.js'
import setState from './utils/setState.js'

const prompter = (cz, commit) => {
  const run = async () => {
    const { cliAnswers, cliOptions, passThroughParams } = parseArgs()
    const state = setState(cliOptions)

    await isEnabled(state)

    const options = {
      cliAnswers,
      cliOptions,
      passThroughParams,
      state,
    }

    switch (cliOptions.mode) {
      case TYPE_BRANCH:
        await runInteractiveQuestions(state, cliAnswers, cliOptions)
        return setBranch(options)
        break
      case TYPE_COMMIT:
      default: {
        await runInteractiveQuestions(state, cliAnswers, cliOptions)
        const message = getCommitMessage(state)
        return commit(message)
        break
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  run()
}

export { prompter }
