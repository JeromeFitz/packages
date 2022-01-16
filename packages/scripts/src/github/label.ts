#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
// @todo(types)
import { Octokit } from '@octokit/rest'
import chalkPipe from 'chalk-pipe'
import isCI from 'is-ci'

import getLabels from '../data/labels'
!isCI && require('dotenv').config({ path: './.env' })

const octokit = new Octokit({ auth: process.env.GH_TOKEN })

// const owner = process.env.REPO_OWNER
// const repo = process.env.REPO_REPO

const labels = getLabels.map((label) => ({
  name: `${label.emoji} ${label.name}`,
  description: label.description,
  color: label.color,
}))

// @note
// - Potentialy may be to do a`listLabelsForRepo` then `deleteLabel` and just`createLabel` fresh
// - Or `listLabelsForRepo` then create a migration script instead.
// eslint-disable-next-line @typescript-eslint/require-await
async function createLabels({ owner, repo }) {
  try {
    labels.map(async (label) => {
      await octokit.rest.issues.createLabel({
        owner,
        repo,
        ...label,
      })
      console.log(
        chalkPipe('green.bold')(
          `✅️  success: ${owner}/${repo} => createLabel: ${label.name}`
        )
      )
    })
  } catch (error) {
    console.log(chalkPipe('red.bold')(`❎️  error: ${owner}/${repo} => createLabel`))
    // console.log(chalkPipe('white.italic')(error))
  }
}

export default createLabels
