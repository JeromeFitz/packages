/** biome-ignore-all lint/suspicious/noConsole: migrate */
import process from 'node:process'

import {
  COMMIT_FORMATS,
  COMMIT_MODES,
  FLAGS,
  LOGS,
  OPTIONS,
} from '~ccommit/lib/index.js'
import { generateLog, getStagedFiles } from '~ccommit/utils/index.js'

const getOptionsForCommand = (command: string, flags: any): any => {
  const commandsWithOptions = [FLAGS.COMMIT, FLAGS.HOOK]

  // @ts-ignore
  if (commandsWithOptions.includes(command)) {
    const options = {
      dryrun: flags[FLAGS.DRYRUN],
      emoji: flags[FLAGS.EMOJI],
      // options
      format:
        flags[OPTIONS.FORMAT] === COMMIT_FORMATS.CONVENTIONAL
          ? flags[FLAGS.EMOJI]
            ? COMMIT_FORMATS.CONVENTIONAL
            : COMMIT_FORMATS.CONVENTIONAL_NO_EMOJI
          : COMMIT_FORMATS.GITMOJI,
      message: flags[OPTIONS.MESSAGE],
      mode: command === FLAGS.HOOK ? COMMIT_MODES.HOOK : COMMIT_MODES.CLIENT,
      scope: flags[OPTIONS.SCOPE],
      skip: flags[FLAGS.SKIP],
      title: flags[OPTIONS.TITLE],
      type: flags[OPTIONS.TYPE],
    }

    return options
  }

  return null
}

// @todo(lint) complexity: 11
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: migrate
const findCommand = (cli: any, options: any): void => {
  const flags = cli.flags
  const commandFlag = Object.keys(flags)
    .map((flag) => flags[flag] && flag)
    .find((flag) => options[flag])

  const filesChanged = getStagedFiles()

  if (!flags[FLAGS.DRYRUN] && !filesChanged) {
    console.log(generateLog(LOGS.TYPES.ERROR, LOGS.MESSAGES.STAGED_FILES))
    process.exit(2)
  }

  if (flags[FLAGS.COMMIT] && flags[FLAGS.HOOK]) {
    console.log(generateLog(LOGS.TYPES.ERROR, LOGS.MESSAGES.MODE_CONFLICT))
    process.exit(2)
  }

  if (
    flags[OPTIONS.MESSAGE] ||
    flags[OPTIONS.SCOPE] ||
    flags[OPTIONS.TITLE] ||
    flags[OPTIONS.TYPE]
  ) {
    flags[FLAGS.SKIP] = true
  }

  if (flags[FLAGS.SKIP]) {
    if (flags[OPTIONS.TITLE] && flags[OPTIONS.TYPE]) {
      flags[FLAGS.SKIP] = true
    } else {
      flags[FLAGS.SKIP] = false
      console.log(
        generateLog(LOGS.TYPES.ERROR, LOGS.MESSAGES.COMMAND_LINE_WITHOUT_REQUIRED),
      )
      flags[OPTIONS.TITLE] = undefined
      flags[OPTIONS.TYPE] = undefined
    }
  }

  const commandOptions = getOptionsForCommand(commandFlag, flags)

  // biome-ignore lint/correctness/noVoidTypeReturn: migrate
  return options[commandFlag] ? options[commandFlag](commandOptions) : cli.showHelp()
}

export { findCommand }
