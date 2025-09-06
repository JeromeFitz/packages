/** biome-ignore-all lint/suspicious/noConsole: migrate */
import { Octokit } from '@octokit/rest'
import { createColorize } from 'colorize-template'
import isCI from 'is-ci'
import pico from 'picocolors'

import getLabels from '../data/labels.js'

if (!isCI) {
  const dotenv = await import('dotenv')
  dotenv.config({ path: '../../.env' })
}
const colorize = createColorize(pico)
const octokit = new Octokit({ auth: process.env.GH_TOKEN })

// const owner = process.env.REPO_OWNER
// const repo = process.env.REPO_REPO

const labels = getLabels.map((label) => ({
  color: label.color,
  description: label.description,
  name: `${label.emoji} ${label.name}`,
}))

// @note
// - Potentialy may be to do a`listLabelsForRepo` then `deleteLabel` and just`createLabel` fresh
// - Or `listLabelsForRepo` then create a migration script instead.
async function createLabels({ owner, repo }) {
  try {
    labels.map(async (label) => {
      await octokit.rest.issues.createLabel({
        owner,
        repo,
        ...label,
      })
      console.log(
        colorize`{green.bold ✅️  success: ${owner}/${repo} => createLabel: ${label.name}}`,
      )
    })
  } catch (_error) {
    console.log(colorize`{red.bold ❎️  error: ${owner}/${repo} => createLabel`)
    // console.log(colorize`{white.italic ${error}}`)
  }
}

export default createLabels
