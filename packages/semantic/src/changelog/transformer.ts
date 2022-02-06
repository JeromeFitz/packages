import { typeSpecs } from '@jeromefitz/conventional-gitmoji'
// import { Octokit } from '@octokit/rest'
import GraphemeSplitter from 'grapheme-splitter'
import _pullAt from 'lodash/pullAt.js'

const splitter = new GraphemeSplitter()
// const octokit = new Octokit({ auth: process.env.GH_TOKEN })

// interface CommitType {
//   type: any
//   typeSpecIndex?: any
//   order?: any
//   hash?: any
//   subject?: any
// }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const transformer = (commit: any, context: any) => {
  const { type } = commit

  /**
   * @note rewrite types
   */
  const typeSpecIndex = typeSpecs.findIndex(
    ({ code: c, emoji: e, type: t, value: v }) => {
      if (type === null) return
      return (
        // @hack(semantic) strip colon from :type: for stricter comparison
        type.replace(/\:/g, '') === c.replace(/\:/g, '') ||
        type === e ||
        type === t ||
        type === v
      )
    }
  )

  /**
   * @note if type is not present in typeSpecIndex => exit
   */
  if (typeSpecIndex === -1) return

  /**
   * @note if typeSpec does not have releaseNotes => exit
   *       this could mean they are not for public consumption
   */
  const typeSpec = typeSpecs[typeSpecIndex]
  if (!typeSpec.releaseNotes) return

  /**
   * @note type
   * @todo turn on/off emoji, "section" descriptive enough?
   */
  commit.type = `${typeSpec.emoji}  ${typeSpec.section}`
  commit.typeSpecIndex = typeSpecIndex

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

  commit.subject = subject

  /**
   * @todo get username (github|gitlab|etc.)
   * @todo this should be handled in separate custom footer
   */
  // const userData = await octokit.request('GET /search/users', {
  //   q: commit.committer.email,
  // })
  // commit.login = !!userData ? userData?.data?.items[0].login : null

  /**
   * @note return the new mutated `commit`
   */
  return commit
}

export default transformer
