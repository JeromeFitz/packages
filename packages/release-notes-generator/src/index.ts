import { format, URL } from 'url'

import conventionalCommitsFilter from 'conventional-commits-filter'
import { sync as conventionalCommitsParser } from 'conventional-commits-parser'
import _merge from 'lodash/merge'
import readPkgUp from 'read-pkg-up'

import generate from './utils/generate'
import { getChangelogConfig } from './utils/getChangelogConfig'
import { getMarkdown } from './utils/getMarkdown'
import { processCommit } from './utils/processCommit'

const configGithub = {
  hostname: 'github.com',
  issue: 'issues',
  commit: 'commit',
  referenceActions: [
    'close',
    'closes',
    'closed',
    'fix',
    'fixes',
    'fixed',
    'resolve',
    'resolves',
    'resolved',
  ],
  issuePrefixes: ['#', 'gh-'],
}

// eslint-disable-next-line complexity
async function generateNotes(pluginConfig, context) {
  // const { parserOpts, writerOpts } = pluginConfig
  const { parserOpts, writerOpts } = await getChangelogConfig(pluginConfig, context)
  const { commits: commitsPassed, lastRelease, nextRelease, options, cwd } = context

  const { commit, issue, referenceActions, issuePrefixes } = configGithub

  console.dir(`--- 0`)

  const previousTag = lastRelease.gitTag || lastRelease.gitHead
  const currentTag = nextRelease.gitTag || nextRelease.gitHead
  const {
    host: hostConfig,
    linkCompare,
    linkReferences,
    commit: commitConfig,
    issue: issueConfig,
  } = pluginConfig

  const repositoryUrl = options.repositoryUrl.replace(/\.git$/i, '')
  const [match, auth, host, path] =
    /^(?!.+:\/\/)(?:(?<auth>.*)@)?(?<host>.*?):(?<path>.*)$/.exec(repositoryUrl) ||
    []
  // eslint-disable-next-line prefer-const
  let { hostname, port, pathname, protocol } = new URL(
    match ? `ssh://${auth ? `${auth}@` : ''}${host}/${path}` : repositoryUrl
  )
  port = protocol.includes('ssh') ? '' : port
  protocol = protocol && /http[^s]/.test(protocol) ? 'http' : 'https'

  const [, owner, repository] =
    /^\/(?<owner>[^/]+)?\/?(?<repository>.+)?$/.exec(pathname) ?? []

  console.dir(`--- 1`)

  const changelogContext = _merge(
    {
      version: nextRelease.version,
      host: format({ protocol, hostname, port }),
      owner,
      repository,
      previousTag,
      currentTag,
      linkCompare: currentTag && previousTag,
      issue,
      commit,
      packageData: ((await readPkgUp({ normalize: false, cwd })) || {}).packageJson,
    },
    {
      host: hostConfig,
      linkCompare,
      linkReferences,
      commit: commitConfig,
      issue: issueConfig,
    }
  )

  console.dir(`--- 2`)

  const commitsParsed = conventionalCommitsFilter(
    commitsPassed
      .filter(({ message }) => {
        console.dir(`commitsPassed => filter`)
        console.dir(message)
        if (!message.trim()) {
          return false
        }
        return true
      })
      .map((commitRaw) => {
        console.dir(`> commitRaw`)
        console.dir(commitRaw)
        const commitPassed = {
          ...commitRaw,
          ...conventionalCommitsParser(commitRaw.message, {
            referenceActions,
            issuePrefixes,
            ...parserOpts,
          }),
        }
        // console.dir(`> commitPassed`)
        // console.dir(commitPassed)
        return commitPassed
      })
  )

  console.dir(`--- 3`)
  console.dir(commitsParsed)

  let commits: any = []
  await commitsParsed.map(async (commitParsed) => {
    console.dir(`> commitsParsed: commitParsed`)
    console.dir(commitParsed)
    const commitProcessed: any = await processCommit(
      commitParsed,
      writerOpts.transform,
      context
    )
    commits.push(commitProcessed)
  })

  /**
   * @hack why is something being brought back as undefined?
   */

  commits = await commits.filter((commit) => commit !== undefined)

  console.dir(`--- 4`)
  console.dir(commits)

  const _options = _merge({}, changelogContext, options, writerOpts)

  console.dir(`--- 5`)
  /**
   * @note(release-notes-generator) oddly, `date` is pulled from here
   *  could we do this differently? what other fields
   *  are pulled for info purposes?
   */
  const _chunk = commits[0]
  console.dir(`_chunk`)
  console.dir(_chunk)
  const keyCommit = processCommit(_chunk, writerOpts.transform, context) || _chunk
  const { context: _context } = await generate(_options, commits, context, keyCommit)

  console.dir(`--- 6`)

  const markdownContext = _merge({}, changelogContext, _context)

  return getMarkdown(markdownContext, commits)
}

export { generateNotes }
