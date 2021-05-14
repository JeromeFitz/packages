#!/usr/bin/env
const { execSync } = require('child_process')

const { Octokit } = require('@octokit/rest')
const chalkPipe = require('chalk-pipe')
const isCI = require('is-ci')

!isCI && require('dotenv').config({ path: './.env' })
const PULL_REQUEST__GITFLOW = require('../templates/PULL_REQUEST__GITFLOW')

const octokit = new Octokit({ auth: process.env.GH_TOKEN })
const getVersion = (version) => {
  const [major, minor, patch] = version.split('-')[0].split('.')
  return [parseInt(major), parseInt(minor), parseInt(patch)].join('.')
}

async function setPullRequest({
  dryRun = false,
  head,
  labels,
  repo_id,
  version,
  q,
}) {
  try {
    // @note(ci) assumes travis keeps us honest when this runs
    const base = isMain ? 'develop' : 'main'
    const bodyTemplate = PULL_REQUEST__GITFLOW()
    const titleTemplate = `merge: 🔀️ v{version} => {base} [gitflow] [skip ci]`

    const toStore = isMain ? 'Release' : 'Submit'

    const body = bodyTemplate
      .replace(/\{base\}/g, base)
      .replace(/\{head\}/g, head)
      .replace(/\{toStore\}/g, toStore)
      .replace(/\{version\}/g, version)

    const title = titleTemplate
      .replace(/\{base\}/g, base)
      .replace(/\{head\}/g, head)
      .replace(/\{toStore\}/g, toStore)
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
      } else {
        console.log(chalkPipe('orange.bold')(`🏃️  dryRun`))
      }
    }
  } catch (error) {
    console.log(chalkPipe('red.bold')(`❎️  error: ${owner}/${repo} => pulls.list`))
    console.log(chalkPipe('white.italic')(error))
  }
}

module.exports = setPullRequest
