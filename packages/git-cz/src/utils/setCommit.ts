/* eslint-disable @typescript-eslint/restrict-plus-operands */
import fs from 'fs'
import { join } from 'path'

import chalkPipe from 'chalk-pipe'
import shellsync from 'shellsync'

import executeCommand from './executeCommand.js'
import getBranchName from './getBranchName.js'
import getGitRootDir from './getGitRootDir.js'
import { TYPE_BRANCH, TYPE_COMMIT } from './questionConfig.js'

const commitMsgFile = join(getGitRootDir(), '.git', 'COMMIT_EDITMSG')

// @todo(any)
const getCommitMessage = (state: any) => {
  const { answers, config } = state

  const branchName = Boolean(answers?.branchFlag)
    ? state.config.commit.before.branchName +
      getBranchName().split('/').slice(-1)[0] +
      state.config.commit.after.branchName
    : ''

  const emoji =
    state.config.commit.before.emoji +
    state.types.commit[answers.commitTypes].emoji +
    state.config.commit.after.emoji

  const scope = answers.commitScopes
    ? state.config.commit.before.scope +
      answers.commitScopes.trim() +
      state.config.commit.after.scope
    : ''

  const subject = answers.commitSubject.trim()
  const type = answers.commitTypes ? answers.commitTypes : ''

  let message = state.config.commit.format
    .replace(/\{emoji\}/g, emoji)
    .replace(/\{scope\}/g, scope)
    .replace(/\{branchName\}/g, branchName)
    .replace(/\{subject\}/g, subject)
    .replace(/\{type\}/g, type)

  const hasTicketUrl = Boolean(branchName) && Boolean(config.branch.url)
  const hasBody = Boolean(answers.commitBody)
  const hasBreaking = Boolean(answers.commitBreaking)

  if (hasTicketUrl) {
    message += `\n\n**Ticket:** ${config.branch.url}${branchName}`
  }
  if (hasBody) {
    message += `\n\n${answers.commitBody}`
  }
  if (hasBreaking) {
    message += answers.commitBreaking
  }

  return message
}

// @todo(any)
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment */
const setCommit = ({
  // @ts-ignore
  appendedArgs = [],
  // @ts-ignore
  cliAnswers,
  // @ts-ignore
  cliOptions,
  // @ts-ignore
  passThroughParams,
  // @ts-ignore
  state,
}) => {
  const message =
    cliOptions.mode === TYPE_COMMIT ? getCommitMessage(state) : TYPE_BRANCH

  const commandArray = ['git', 'commit', '--file', commitMsgFile, ...appendedArgs]
  const command = commandArray.join(' ')

  /* eslint-disable no-console */
  if (cliOptions.dryRun) {
    console.log(chalkPipe('orange.bold')('⚗️  DRY RUN: TESTING'))

    // Full path is replaced w/ relative to make test pass
    const commandReplace = command.replace(commitMsgFile, '.git/COMMIT_EDITMSG')
    console.log(chalkPipe('orange')('> commandReplace:'))
    console.log(chalkPipe('white.italic')(commandReplace))

    console.log(chalkPipe('orange')('> message:'))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    console.log(chalkPipe('white.italic')(message))
    console.log()
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    fs.writeFileSync(commitMsgFile, message)

    if (cliOptions.hook) {
      process.exit(0)
    }
    executeCommand(shellsync`${command}`)
  }
}

export { getCommitMessage }
export default setCommit
