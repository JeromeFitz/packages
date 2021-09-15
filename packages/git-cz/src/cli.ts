import chalkPipe from 'chalk-pipe'

import isEnabled from './utils/isEnabled'
import parseArgs from './utils/parseArgs'
import runInteractiveQuestions from './utils/runInteractiveQuestions'
import runNonInteractiveMode from './utils/runNonInteractiveMode'
import setBranch from './utils/setBranch'
import setCommit from './utils/setCommit'
import setState from './utils/setState'

const cli = async () => {
  try {
    const { cliAnswers, cliOptions, passThroughParams } = parseArgs()

    const state = setState(cliOptions)

    await isEnabled(state)

    Object.keys(cliAnswers).forEach((key) => {
      state.answers[key] = cliAnswers[key]
    })

    const appendedArgs = []

    for (const key in passThroughParams) {
      const value = passThroughParams[key]

      if (key.length === 1) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        appendedArgs.push('-' + key)
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        appendedArgs.push('--' + key)
      }

      if (value !== true) {
        // Argument of type 'any' is not assignable to parameter of type 'never'.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        appendedArgs.push(value)
      }
    }

    if (cliOptions.nonInteractive) {
      runNonInteractiveMode(state, cliAnswers)
    } else {
      await runInteractiveQuestions(state, cliAnswers, cliOptions)
    }

    const options = {
      appendedArgs,
      cliAnswers,
      cliOptions,
      passThroughParams,
      state,
    }

    switch (cliOptions.mode) {
      case 'branch':
        setBranch(options)
        break
      case 'commit':
      default:
        setCommit(options)
        break
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(chalkPipe('red.bold')('⚠️ error:'))
    // eslint-disable-next-line no-console
    console.log(chalkPipe('white.italic')(`${error}`))
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
cli()
