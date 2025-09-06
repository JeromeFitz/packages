import { format, URL } from 'node:url'

import { filterRevertedCommitsSync } from 'conventional-commits-filter'
import { CommitParser } from 'conventional-commits-parser'
import _merge from 'lodash/merge.js'
import { readPackageUp } from 'read-package-up'

import generate from './utils/generate.js'
import { getChangelogConfig } from './utils/getChangelogConfig.js'
import { getMarkdown } from './utils/getMarkdown.js'
import { processCommit } from './utils/processCommit.js'

const configGithub = {
  commit: 'commit',
  hostname: 'github.com',
  issue: 'issues',
  issuePrefixes: ['#', 'gh-'],
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
}

// @todo(complexity) 17
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: migrate
async function generateNotes(pluginConfig, context) {
  const { parserOpts, writerOpts } = await getChangelogConfig(pluginConfig, context)
  const { commits: commitsPassed, cwd, lastRelease, nextRelease, options } = context

  const { commit, issue, issuePrefixes, referenceActions } = configGithub

  const previousTag = lastRelease.gitTag || lastRelease.gitHead
  const currentTag = nextRelease.gitTag || nextRelease.gitHead
  const {
    commit: commitConfig,
    host: hostConfig,
    issue: issueConfig,
    linkCompare,
    linkReferences,
  } = pluginConfig

  const repositoryUrl = options.repositoryUrl.replace(/\.git$/i, '')
  const [match, auth, host, path] =
    /^(?!.+:\/\/)(?:(?<auth>.*)@)?(?<host>.*?):(?<path>.*)$/.exec(repositoryUrl) ||
    []
  let { hostname, pathname, port, protocol } = new URL(
    match ? `ssh://${auth ? `${auth}@` : ''}${host}/${path}` : repositoryUrl,
  )
  port = protocol.includes('ssh') ? '' : port
  protocol = protocol && /http[^s]/.test(protocol) ? 'http' : 'https'

  const [, owner, repository] =
    /^\/(?<owner>[^/]+)?\/?(?<repository>.+)?$/.exec(pathname) ?? []

  const changelogContext = _merge(
    {
      commit,
      currentTag,
      host: format({ hostname, port, protocol }),
      issue,
      linkCompare: currentTag && previousTag,
      owner,
      packageData: (await readPackageUp({ cwd, normalize: false }))?.packageJson,
      previousTag,
      repository,
      version: nextRelease.version,
    },
    {
      commit: commitConfig,
      host: hostConfig,
      issue: issueConfig,
      linkCompare,
      linkReferences,
    },
  )

  const commitsParsed: any = []
  const parser = new CommitParser({
    issuePrefixes,
    referenceActions,
    ...parserOpts,
  })

  for (const _commit of filterRevertedCommitsSync(commitsPassed)) {
    const commit: any = _commit
    if (!commit?.message.trim()) {
      return false
    }
    const commitPassed = {
      ...commit,
      ...parser.parse(commit?.message),
    }
    commitsParsed.push(commitPassed)
  }
  let commits: any = []
  await commitsParsed.map(async (commitParsed) => {
    const commitProcessed: any = await processCommit(
      commitParsed,
      writerOpts.transform,
      context,
    )
    commits.push(commitProcessed)
  })

  /**
   * @hack why is something being brought back as undefined?
   */
  commits = await commits.filter((commit) => commit !== undefined)

  const _options = _merge({}, changelogContext, options, writerOpts)

  /**
   * @note(release-notes-generator) oddly, `date` is pulled from here
   *  could we do this differently? what other fields
   *  are pulled for info purposes?
   */
  const _chunk = commits[0]
  const keyCommit = processCommit(_chunk, writerOpts.transform, context) || _chunk
  const { context: _context } = await generate(_options, commits, context, keyCommit)

  const markdownContext = _merge({}, changelogContext, _context)

  return getMarkdown(markdownContext, commits)
}

export { generateNotes }
