import { format, URL } from 'node:url'

import type {
  MarkdownContext,
  Note,
  ParsedCommit,
  PluginConfig,
  SRContext,
  TransformedCommit,
} from './types'

import { parserOpts, writerOpts } from '@jeromefitz/conventional-gitmoji'

import { filterRevertedCommitsSync } from 'conventional-commits-filter'
import { CommitParser } from 'conventional-commits-parser'
import { readPackageUp } from 'read-package-up'
import { patch as semverPatch, valid as semverValid } from 'semver'

import { getCommitGroups } from './utils/getCommitGroups'
import { getMarkdown } from './utils/getMarkdown'
import { getNoteGroups } from './utils/getNoteGroups'
import { processCommit } from './utils/processCommit'

const commitLinkDefault = 'commit'
const issueLinkDefault = 'issues'

function parseRepositoryUrl(rawUrl: string): {
  hostname: string
  owner: string
  port: string
  protocol: string
  repository: string
} {
  const url = rawUrl.replace(/\.git$/i, '')
  const [match, auth, host, path] =
    /^(?!.+:\/\/)(?:(?<auth>.*)@)?(?<host>.*?):(?<path>.*)$/.exec(url) ?? []
  let { hostname, pathname, port, protocol } = new URL(
    match ? `ssh://${auth ? `${auth}@` : ''}${host}/${path}` : url,
  )
  port = protocol.includes('ssh') ? '' : port
  protocol = /http[^s]/.test(protocol) ? 'http' : 'https'
  const [, owner = '', repository = ''] =
    /^\/(?<owner>[^/]+)?\/?(?<repository>.+)?$/.exec(pathname) ?? []
  return { hostname, owner, port, protocol, repository }
}

function transformCommits(
  rawCommits: SRContext['commits'],
  parser: CommitParser,
  context: SRContext,
): TransformedCommit[] {
  const commits: TransformedCommit[] = []
  for (const raw of filterRevertedCommitsSync(rawCommits)) {
    if (!raw.message?.trim()) continue
    const parsed = {
      ...raw,
      ...parser.parse(raw.message),
      message: raw.message,
    } as ParsedCommit
    const transformed = processCommit(parsed, writerOpts.transform, context)
    if (transformed) commits.push(transformed)
  }
  return commits
}

function collectNotes(commits: TransformedCommit[]): Note[] {
  const notes: Note[] = []
  for (const c of commits) {
    for (const note of c.notes) {
      notes.push({ ...note, commit: c })
    }
  }
  return notes
}

async function generateNotes(
  pluginConfig: PluginConfig,
  context: SRContext,
): Promise<string> {
  const { commits: rawCommits, cwd, lastRelease, nextRelease, options } = context

  const previousTag = lastRelease.gitTag || lastRelease.gitHead
  const currentTag = nextRelease.gitTag || nextRelease.gitHead
  const { hostname, owner, port, protocol, repository } = parseRepositoryUrl(
    options.repositoryUrl,
  )

  const parser = new CommitParser(parserOpts)
  const commits = transformCommits(rawCommits, parser, context)
  const notes = collectNotes(commits)

  const version = nextRelease.version
  const packageData = (await readPackageUp({ cwd, normalize: false }))?.packageJson

  const markdownContext: MarkdownContext = {
    commit: pluginConfig.commit ?? commitLinkDefault,
    commitGroups: getCommitGroups(
      writerOpts.groupBy,
      commits,
      writerOpts.commitGroupsSort,
      writerOpts.commitsSort,
    ),
    currentTag,
    date: commits[0]?.committerDate,
    host: format({ hostname, port, protocol }),
    isPatch: semverValid(version) ? (semverPatch(version) ?? 0) !== 0 : undefined,
    issue: pluginConfig.issue ?? issueLinkDefault,
    linkCompare: pluginConfig.linkCompare ?? !!(currentTag && previousTag),
    linkReferences: pluginConfig.linkReferences,
    noteGroups: getNoteGroups(notes),
    options,
    owner,
    packageData,
    previousTag,
    repository,
    version,
  }

  return getMarkdown(markdownContext, commits)
}

export { generateNotes }
