/** biome-ignore-all lint/suspicious/noConsole: migrate */
import { Octokit } from '@octokit/rest'
import { createColorize } from 'colorize-template'
import isCI from 'is-ci'
import pico from 'picocolors'

import PULL_REQUEST from '../templates/PULL_REQUEST__RELEASE.js'

if (!isCI) {
  const dotenv = await import('dotenv')
  dotenv.config({ path: '../../.env' })
}

const colorize = createColorize(pico)
const octokit = new Octokit({ auth: process.env.GH_TOKEN })
const _getVersion = (version) => {
  const [major, minor, patch] = version.split('-')[0].split('.')
  // biome-ignore lint/correctness/useParseIntRadix: migrate
  return [parseInt(major), parseInt(minor), parseInt(patch)].join('.')
}

async function setPullRequest({
  base,
  dryRun = false,
  head,
  labels,
  owner,
  q,
  repo,
  version,
}) {
  try {
    const repo_id = `${owner}/${repo}`
    const { gitflow } = PULL_REQUEST
    const bodyTemplate = gitflow
    const titleTemplate = `merge: 🔀️ v{version} => {base} [gitflow]`

    const body = bodyTemplate
      .replace(/\{base\}/g, base)
      .replace(/\{head\}/g, head)
      .replace(/\{version\}/g, version)

    const title = titleTemplate
      .replace(/\{base\}/g, base)
      .replace(/\{head\}/g, head)
      .replace(/\{version\}/g, version)

    const response = await octokit.rest.search.issuesAndPullRequests({
      q,
    })
    const doesGitflowPrExists = !!response.data && response.data.total_count === 1
    if (doesGitflowPrExists) {
      const pr = response.data.items[0]
      const pull_number = pr.number
      const _issue_number = pull_number
      console.log(
        colorize`{orange.bold 🤔️  ${pull_number} => Exists, should we update PR ?}`,
      )
      console.log(colorize`{orange.bold 🤪️  Right now we are not}`)
      console.log(
        colorize`{orange.bold 😵️  https://github.com/${repo_id}/pull/${pull_number}}`,
      )

      // await octokit.rest.pulls.update({
      //   owner,
      //   repo,
      //   head,
      //   base,
      //   title,
      //   body,
      //   pull_number,
      // });

      // await octokit.rest.issues.setLabels({
      //   owner,
      //   repo,
      //   issue_number,
      //   labels,
      // });
    } else {
      console.log(colorize`{blue.bold 🤠️  Yee-haw, Create a Pee-Ahr}`)
      console.log(colorize`{blue.bold 🤓️  ${title}}`)

      if (dryRun) {
        console.log(colorize`{orange.bold 🏃️  dryRun]`)
      } else {
        const pull = await octokit.rest.pulls.create({
          base,
          body,
          head,
          owner,
          repo,
          title,
        })
        void octokit.rest.issues.addLabels({
          issue_number: pull.data.number,
          labels,
          owner,
          repo,
        })
      }
    }
  } catch (error) {
    console.log(colorize`{red.bold ❎️  error: ${owner}/${repo} => pulls.list}`)
    console.log(colorize`{white.italic ${error}}`)
  }
}

export default setPullRequest
