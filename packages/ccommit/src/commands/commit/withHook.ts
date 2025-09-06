/** biome-ignore-all lint/suspicious/noConsole: migrate */
import fs from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'

import { getGitRootDir, printDryRun } from '~ccommit/utils/index.js'

const commitMsgFile = join(getGitRootDir(), '.git', 'COMMIT_EDITMSG')

const withHook = (answers, options) => {
  try {
    let commitMessage = answers?.subject
    if (answers?.message && answers?.message !== '\n') {
      commitMessage += `\n\n${answers.message}`
    }
    if (answers?.messageBreaking && answers?.messageBreaking !== '\n') {
      commitMessage += `\n\n${answers.messageBreaking}`
    }

    if (options?.dryrun) {
      printDryRun(commitMessage)
    } else {
      fs.writeFileSync(commitMsgFile, commitMessage)
    }
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

export default withHook
