#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
// @todo(types)
import { Octokit } from '@octokit/rest'
import chalkPipe from 'chalk-pipe'
import isCI from 'is-ci'

import getMilestones from '../data/milestones'
!isCI && require('dotenv').config({ path: './.env' })

const octokit = new Octokit({ auth: process.env.GH_TOKEN })

// const owner = process.env.REPO_OWNER
// const repo = process.env.REPO_REPO

const milestones = getMilestones.map((milestone) => ({
  title: `${milestone.emoji} ${milestone.name}`,
  description: milestone.description,
  state: milestone.state,
}))

// eslint-disable-next-line @typescript-eslint/require-await
async function createMilestones({ owner, repo }) {
  try {
    milestones.map(async (milestone) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      await octokit.rest.issues.createMilestone({
        owner,
        repo,
        ...milestone,
      })
      console.log(
        chalkPipe('green.bold')(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          `✅️  success: ${owner}/${repo} => createMilestone: ${milestone.name}`
        )
      )
    })
  } catch (error) {
    console.log(
      chalkPipe('red.bold')(`❎️  error: ${owner}/${repo} => createMilestone`)
    )
    // console.log(chalkPipe('white.italic')(error))
  }
}

export default createMilestones
