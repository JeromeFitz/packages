#!/usr/bin/env
const { execSync } = require('child_process')

const { Octokit } = require('@octokit/rest')
const chalkPipe = require('chalk-pipe')
const isCI = require('is-ci')

!isCI && require('dotenv').config({ path: './.env' })
const PULL_REQUEST = require('../templates/PULL_REQUEST').default

const octokit = new Octokit({ auth: process.env.GH_TOKEN })
const getVersion = (version) => {
  const [major, minor, patch] = version.split('-')[0].split('.')
  return [parseInt(major), parseInt(minor), parseInt(patch)].join('.')
}

async function setPullRequest({
  base,
  dryRun = false,
  head,
  labels,
  owner,
  repo,
  version,
  q,
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
      const issue_number = pull_number
      console.log(
        chalkPipe('orange.bold')(
          `🤔️  ${pull_number} => Exists, should we update PR?`
        )
      )
      console.log(chalkPipe('orange.bold')(`🤪️  Right now we are not`))
      console.log(
        chalkPipe('orange.bold')(
          `😵️  https://github.com/${repo_id}/pull/${pull_number}`
        )
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
      console.log(chalkPipe('blue.bold')(`🤠️  Yee-haw, Create a Pee-Ahr`))
      console.log(chalkPipe('blue.bold')(`🤓️  ${title}`))

      if (dryRun) {
        console.log(chalkPipe('orange.bold')(`🏃️  dryRun`))
      } else {
        const pull = await octokit.rest.pulls.create({
          owner,
          repo,
          head,
          base,
          title,
          body,
        })
        octokit.rest.issues.addLabels({
          owner,
          repo,
          issue_number: pull.data.number,
          labels,
        })
      }
    }
  } catch (error) {
    console.log(chalkPipe('red.bold')(`❎️  error: ${owner}/${repo} => pulls.list`))
    console.log(chalkPipe('white.italic')(error))
  }
}

module.exports = setPullRequest
