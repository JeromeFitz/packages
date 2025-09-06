import GraphemeSplitter from 'grapheme-splitter'
import _pullAt from 'lodash/pullAt.js'

import { typeSpecs } from '../../index.js'

const splitter = new GraphemeSplitter()

const transformer = (commit: any, _context: any) => {
  // console.dir(`~~> transformer`)
  // console.dir(commit)
  const { type: _type } = commit
  let type = _type
  /**
   * @note rewrite types
   */
  let typeSpecIndex = typeSpecs.findIndex(
    ({ code: c, emoji: e, type: t, value: v }) => {
      if (type === null) return
      return (
        // @hack(semantic) strip colon from :type: for stricter comparison
        // biome-ignore lint/complexity/noUselessEscapeInRegex: migrate
        type.replace(/\:/g, '') === c.replace(/\:/g, '') ||
        type === t ||
        type === v ||
        type === e
      )
    },
  )

  /**
   * @hack
   * - if type is not present, attempt fallback
   * - if type is not present or fallback
   *    => typeSpecIndex => exit
   */
  if (typeSpecIndex === -1) {
    type = splitter.splitGraphemes(_type)[0]
    typeSpecIndex = typeSpecs.findIndex(({ emoji: e }) => {
      if (type === null) return
      return type[0] === e[0] || type[0] === splitter.splitGraphemes(e)[0]
    })
  }

  if (typeSpecIndex === -1) return
  const typeSpec = typeSpecs[typeSpecIndex]

  /**
   * @todo put this into configuration
   * - array of types to check against
   * - check against title? [skip notes]
   *
   * @note if typeSpec does not have releaseNotes => exit
   *       this could mean they are not for public consumption
   */
  // if (!typeSpec.releaseNotes) return

  /**
   * @note type
   * @todo turn on/off emoji, "section" descriptive enough?
   */
  commit.type = `${typeSpec.emoji}  ${typeSpec.description}`
  commit.typeSpecIndex = typeSpecIndex
  commit.typeSpec = typeSpec

  /**
   * @todo can only `groupBy` one field (type) at the moment
   *       below is pre-work to `groupBy` order => type
   *       so that we could further group in the release notes
   */
  // // @note(semver) semantic-versioning future-proofing
  // //               moving to => breaking | feature | fix
  // if (typeSpec.semver === 'breaking' || typeSpec.semver === 'major') {
  //   commit.order = 1
  // }
  // if (typeSpec.semver === 'feature' || typeSpec.semver === 'minor') {
  //   commit.order = 3
  // }
  // if (typeSpec.semver === 'fix' || typeSpec.semver === 'patch') {
  //   commit.order = 5
  // }
  // if (typeSpec.semver === null) {
  //   commit.order = 7
  // }
  // if (!Boolean(typeSpec.semver)) {
  //   commit.order = 9
  // }

  /**
   * @note hash
   */
  if (typeof commit.hash === 'string') {
    commit.hash = commit.hash.substring(0, 7)
  }

  /**
   * @note subject
   */
  const subjectTemp = splitter.splitGraphemes(commit.subject)
  const isEmojiMatch = subjectTemp[0] === typeSpec.emoji
  const subject = isEmojiMatch
    ? commit.subject
        .replace(_pullAt(subjectTemp, [0]), '')
        .replace(_pullAt(subjectTemp, [0]), '')
    : commit.subject

  commit.subject = subject.trim()

  /**
   * @note return the new mutated `commit`
   */
  // console.dir(`> transformer: end`)
  // console.dir(commit)
  return commit
}

export default transformer
