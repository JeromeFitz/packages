#!/usr/bin/env node

import chalkPipe from 'chalk-pipe'
import { Octokit } from '@octokit/rest'
import isCI from 'is-ci'
import PULL_REQUEST__RELEASE from '../templates/PULL_REQUEST__RELEASE'
import { version } from '../package.json'
!isCI && require('dotenv').config({ path: './.env' })

const octokit = new Octokit({ auth: process.env.GH_TOKEN })

const owner = process.env.REPO_OWNER
const repo = process.env.REPO_REPO

const base = 'main'
const head = 'feature/github-templates'

const bodyTemplate = PULL_REQUEST__RELEASE()
const titleTemplate = `merge: 🔀️ v{version} => {base} [gitflow] [skip ci]`

const toStore = base === 'main' ? 'Release' : 'Submit'

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

async function pullRequest() {
  try {
    // const response = await octokit.rest.pulls.create({
    //   owner,
    //   repo,
    //   head,
    //   base,
    //   title,
    //   body,
    // })
    const response = await octokit.rest.pulls.update({
      owner,
      repo,
      head,
      base,
      title,
      body,
      pull_number: 1,
    })
    if (!!response.data.body) {
      console.log(chalkPipe('green.bold')(`✅️  success: ${owner}/${repo} => pr`))
      // console.log(chalkPipe('white.italic')(response.body))
      console.log(JSON.stringify(response, null, 2))
    }
  } catch (error) {
    console.log(chalkPipe('red.bold')(`❎️  error: ${owner}/${repo} => pr`))
    // console.log(chalkPipe('white.italic')(error))
  }
}

pullRequest()
