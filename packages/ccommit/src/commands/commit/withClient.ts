import { execa } from 'execa'

import { LOGS } from '~ccommit/lib'
import { generateLog, printDryRun } from '~ccommit/utils'

const withClient = async (answers, options) => {
  try {
    const title = answers?.subject
    const message = answers?.message
    const messageBreaking = answers?.messageBreaking

    const commitArray = ['commit', '-m', title]
    if (message) commitArray.push('-m', message)
    if (messageBreaking) commitArray.push('-m', messageBreaking)

    if (options?.dryrun) {
      printDryRun(['git', ...commitArray])
    } else {
      await execa('git', commitArray, {
        buffer: false,
        stdio: 'inherit',
      })
    }
  } catch (error: any) {
    console.error(
      generateLog(LOGS.TYPES.ERROR, LOGS.MESSAGES.COMMIT_FAIL, error.escapedCommand)
    )
    process.exit(1)
  }
}

export default withClient
