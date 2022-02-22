import { format, URL } from 'url'

import filter from 'conventional-commits-filter'
import { sync as parser } from 'conventional-commits-parser'
import _find from 'lodash/find'
import _merge from 'lodash/merge'
import readPkgUp from 'read-pkg-up'

import { HOSTS_CONFIG, loadChangelogConfig } from './config'
import getMarkdown from './getMarkdown'
import util from './lib/util'

// eslint-disable-next-line @typescript-eslint/require-await
// eslint-disable-next-line complexity
async function generateNotes(pluginConfig, context) {
  const { commits, lastRelease, nextRelease, options, cwd } = context
  // console.dir(`pluginConfig`)
  // console.dir(pluginConfig)
  // console.dir(`---`)
  // console.dir(`context`)
  // console.dir(context)
  // console.dir(`---`)
  // console.dir(`cwd: ${cwd}`)
  // console.dir(`lastRelease:`)
  // console.dir(lastRelease)
  // console.dir(`nextRelease:`)
  // console.dir(nextRelease)
  // console.dir(`options:`)
  // console.dir(options)
  // commits.map((commit) => {
  //   console.dir(`commit:`)
  //   console.dir(commit)
  // })

  const repositoryUrl = options.repositoryUrl.replace(/\.git$/i, '')
  const { parserOpts, writerOpts } = await loadChangelogConfig(pluginConfig, context)
  // console.dir(`parserOpts:`)
  // console.dir(parserOpts)
  // console.dir(`writerOpts:`)
  // console.dir(writerOpts)

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

  const { issue, commit, referenceActions, issuePrefixes } =
    _find(HOSTS_CONFIG, (conf: any) => conf.hostname === hostname) ||
    HOSTS_CONFIG.default
  const parsedCommits = filter(
    commits
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(({ message, hash }) => {
        if (!message.trim()) {
          // debug('Skip commit %s with empty message', hash)
          return false
        }

        return true
      })
      .map((rawCommit) => ({
        ...rawCommit,
        ...parser(rawCommit.message, {
          referenceActions,
          issuePrefixes,
          ...parserOpts,
        }),
      }))
  )
  const previousTag = lastRelease.gitTag || lastRelease.gitHead
  const currentTag = nextRelease.gitTag || nextRelease.gitHead
  const {
    host: hostConfig,
    linkCompare,
    linkReferences,
    commit: commitConfig,
    issue: issueConfig,
  } = pluginConfig

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

  const _commits: any = []
  await parsedCommits.map(async (commit) => {
    const __commits: any = await util.processCommit(
      commit,
      writerOpts.transform,
      context
    )
    _commits.push(__commits)
  })

  const _chunk = _commits[0]
  const keyCommit =
    util.processCommit(_chunk, writerOpts.transform, context) || _chunk

  const _options = _merge({}, changelogContext, options, writerOpts)

  /**
   * @todo order commit gorups
   */
  const { context: _context } = await util.generate(
    _options,
    _commits,
    context,
    keyCommit
  )

  const markdownContext = _merge({}, changelogContext, _context)

  return getMarkdown(markdownContext, parsedCommits)
}

export { generateNotes }
