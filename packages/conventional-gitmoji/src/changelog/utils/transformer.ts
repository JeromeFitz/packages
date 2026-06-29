import GraphemeSplitter from 'grapheme-splitter'

import getGitmojiConventional from '../../utils/getGitmojiConventional'
import getTypeSpecs from '../../utils/getTypeSpecs'

// Derive typeSpecs from the utils directly (not the package barrel) to avoid a
// circular import: index -> changelog -> writerOpts -> transformer -> index.
const typeSpecs = getTypeSpecs(getGitmojiConventional())
const splitter = new GraphemeSplitter()

const stripColons = (value: string) => value.replace(/:/g, '')

const findTypeSpecIndex = (type: null | string) => {
  if (type === null) return -1

  // Match against any known form: de-colon'd shortcode, conventional word,
  // value, or gitmoji.
  const direct = typeSpecs.findIndex(
    ({ code, emoji, type: word, value }) =>
      stripColons(type) === stripColons(code) ||
      type === word ||
      type === value ||
      type === emoji,
  )
  if (direct !== -1) return direct

  // Fallback: the type may be a gitmoji glued to other text — match on the
  // first grapheme.
  const first = splitter.splitGraphemes(type)[0]
  return typeSpecs.findIndex(
    ({ emoji }) =>
      first[0] === emoji[0] || first[0] === splitter.splitGraphemes(emoji)[0],
  )
}

export interface TransformCommit {
  type: string | null
  hash: string | null
  subject: string
  notes: unknown[]
  [key: string]: unknown
}

const transformer = (commit: TransformCommit, _context: unknown) => {
  const typeSpecIndex = findTypeSpecIndex(commit.type)
  if (typeSpecIndex === -1) return

  const typeSpec = typeSpecs[typeSpecIndex]

  // Drop the leading gitmoji (and the space after it) from the subject.
  const graphemes = splitter.splitGraphemes(commit.subject)
  const subject = (
    graphemes[0] === typeSpec.emoji ? graphemes.slice(2).join('') : commit.subject
  ).trim()

  return {
    ...commit,
    hash:
      typeof commit.hash === 'string' ? commit.hash.substring(0, 7) : commit.hash,
    subject,
    type: `${typeSpec.emoji}  ${typeSpec.description}`,
    typeSpec,
    typeSpecIndex,
  }
}

export default transformer
