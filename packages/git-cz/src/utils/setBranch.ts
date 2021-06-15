import chalkPipe from 'chalk-pipe'
import shellsync from 'shellsync'

import executeCommand from './executeCommand'

/* eslint-disable @typescript-eslint/no-unused-vars */
const setBranch = ({
  appendedArgs = [],
  cliAnswers,
  cliOptions,
  passThroughParams,
  state,
}) => {
  const hasBranchTypes = Boolean(state.answers.branchTypes)
  /* eslint-disable @typescript-eslint/restrict-plus-operands, operator-linebreak */
  const branchNameReplace = hasBranchTypes
    ? state.answers.branchTypes + '/' + state.answers.branchName
    : state.answers.branchName

  const branchName = state.config.branch.format
    .replace(/\{branchName\}/g, branchNameReplace)
    .replace(/\{branchType\}/g, '')

  if (!branchName) {
    throw new Error('No branchName provided.')
  }

  const commandArray = ['git', 'checkout', '-b', branchName]
  const command = commandArray.join(' ')

  /* eslint-disable no-console */
  if (cliOptions.dryRun) {
    console.log(chalkPipe('orange.bold')('⚗️  DRY RUN: TESTING'))
    console.log(chalkPipe('orange')('> command:'))
    console.log(chalkPipe('white.italic')(command))
    console.log()
  } else {
    executeCommand(shellsync`${command}`)
  }
}

export default setBranch
