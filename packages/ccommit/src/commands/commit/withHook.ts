import fs from 'fs'
import { join } from 'path'

import { getGitRootDir, printDryRun } from '~ccommit/utils'

const commitMsgFile = join(getGitRootDir(), '.git', 'COMMIT_EDITMSG')

const withHook = (answers, options) => {
  try {
    let commitMessage = answers?.subject
    if (answers?.message) {
      commitMessage += `\n\n${answers.message}`
    }
    if (answers?.messageBreaking) {
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
