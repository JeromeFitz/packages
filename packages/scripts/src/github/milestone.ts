// @todo(types)
import { Octokit } from '@octokit/rest'
import { createColorize } from 'colorize-template'
import isCI from 'is-ci'
import pico from 'picocolors'

import getMilestones from '../data/milestones.js'

if (!isCI) {
  const dotenv = await import('dotenv')
  dotenv.config({ path: '../../.env' })
}
const colorize = createColorize(pico)
const octokit = new Octokit({ auth: process.env.GH_TOKEN })

// const owner = process.env.REPO_OWNER
// const repo = process.env.REPO_REPO

const milestones = getMilestones.map((milestone) => ({
  description: milestone.description,
  state: milestone.state,
  title: `${milestone.emoji} ${milestone.name}`,
}))

// eslint-disable-next-line @typescript-eslint/require-await
async function createMilestones({ owner, repo }) {
  try {
    // @todo(types)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    milestones.map(async (milestone: any) => {
      await octokit.rest.issues.createMilestone({
        owner,
        repo,
        ...milestone,
      })
      console.log(
        colorize`{green.bold ✅️  success: ${owner}/${repo} => createMilestone: ${milestone.name}}`,
      )
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log(colorize`{red.bold ❎️  error: ${owner}/${repo} => createMilestone`)
    // console.log(colorize`{white.italic ${error}}`)
  }
}

export default createMilestones
