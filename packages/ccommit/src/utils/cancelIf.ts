/*!
 * reference: https://github.com/carloscuesta/gitmoji-cli
 */
import fs from 'node:fs'
import process from 'node:process'

import { execa } from 'execa'

const cancelIfRebasing = (): Promise<void> =>
  execa('git', ['rev-parse', '--absolute-git-dir']).then(
    ({ stdout: gitDirectory }) => {
      // see https://stackoverflow.com/questions/3921409/how-to-know-if-there-is-a-git-rebase-in-progress
      // to understand how a rebase is detected
      if (
        fs.existsSync(gitDirectory + '/rebase-merge') ||
        fs.existsSync(gitDirectory + '/rebase-apply')
      ) {
        process.exit(0)
      }
    },
  )

const COMMIT_MESSAGE_SOURCE = 4

const cancelIfAmending = (): Promise<void> =>
  new Promise<void>((resolve) => {
    /*
      from https://git-scm.com/docs/githooks#_prepare_commit_msg
      the commit message source is passed as second argument and corresponding 4 for ccommit
      `gitmoji --hook $1 $2`
    */
    const commitMessageSource: string = process.argv[COMMIT_MESSAGE_SOURCE]
    if (
      commitMessageSource &&
      (commitMessageSource.startsWith('commit') ||
        commitMessageSource.startsWith('merge'))
    ) {
      process.exit(0)
    }
    resolve()
  })

// I avoid Promise.all to avoid race condition in future cancel callbacks
const cancelIfNeeded = (): Promise<void> => cancelIfAmending().then(cancelIfRebasing)

export { cancelIfAmending, cancelIfNeeded, cancelIfRebasing, COMMIT_MESSAGE_SOURCE }
