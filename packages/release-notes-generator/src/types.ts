import type { CommitNote, CommitReference } from 'conventional-commits-parser'

interface TypeSpec {
  code: string
  description: string
  emoji: string
  semver: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  type: string
  value: string
}

type ParsedCommit = {
  author?: { email: string; name: string }
  body: string | null
  committerDate?: string
  footer: string | null
  hash?: string
  header: string | null
  mentions: string[]
  merge: string | null
  message: string
  notes: CommitNote[]
  references: CommitReference[]
  revert?: Record<string, string> | null
  scope: string | null
  subject: string | null
  type: string | null
} & Record<string, unknown>

type TransformedCommit = ParsedCommit & {
  hash: string
  raw?: ParsedCommit
  type: string
  typeSpec: TypeSpec
  typeSpecIndex: number
}

interface PluginConfig {
  commit?: string
  config?: string
  host?: string
  issue?: string
  linkCompare?: boolean
  linkReferences?: boolean
}

interface SRCommit {
  author?: { email: string; name: string }
  committerDate?: string
  hash?: string
  message: string
  revert?: Record<string, string> | null
}

interface SRRelease {
  gitHead: string
  gitTag: string
}

interface SROptions {
  contributorsProhibitList?: { email: string[]; login: string[] }
  repositoryUrl: string
}

interface SRContext {
  commits: SRCommit[]
  cwd: string
  lastRelease: SRRelease
  nextRelease: SRRelease & { version: string }
  options: SROptions
}

interface CommitGroup {
  commits: TransformedCommit[]
  order: number
  title: false | string
}

interface Note extends CommitNote {
  commit?: TransformedCommit
  scope?: string
}

interface NoteGroup {
  notes: Note[]
  title: string
}

interface RenderMeta {
  repositoryUrl: string
}

interface MarkdownContext {
  commit: string
  commitGroups: CommitGroup[]
  currentTag: string
  date?: string
  host: string
  isPatch?: boolean
  issue: string
  linkCompare: boolean
  linkReferences?: boolean
  noteGroups: NoteGroup[]
  options?: SROptions
  owner: string
  packageData?: unknown
  previousTag: string
  repository: string
  title?: string
  version: string
}

export type {
  CommitGroup,
  MarkdownContext,
  Note,
  NoteGroup,
  ParsedCommit,
  PluginConfig,
  RenderMeta,
  SRCommit,
  SRContext,
  SROptions,
  SRRelease,
  TransformedCommit,
  TypeSpec,
}
