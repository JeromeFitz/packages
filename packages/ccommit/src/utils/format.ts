/** biome-ignore-all lint/suspicious/noConsole: migrate */
import { COMMIT_FORMATS, FORMAT, TYPE } from '~ccommit/lib/index.js'

const formatCliEmoji = ({ emoji, emojiLength }) =>
  emojiLength === 0 ? `${emoji}     ` : `${emoji}    `

const formatCliType = (type) => type?.padEnd(TYPE.MAX)

const formatCliTypes = (commitTypes: any) => {
  // console.log(`EMOJI  TYPE            DESCRIPTION`)
  // console.log(`-----  ----            -----------`)
  return commitTypes.map(({ description, emoji, emojiLength, type }) => {
    console.log(
      `${formatCliEmoji({
        emoji,
        emojiLength,
      })} ${formatCliType(type)} ${description}`,
    )
  })
}

const formatCommitSubject = (options, answers) => {
  const format = FORMAT[options?.format]

  // @note(ccommit) two spaces after emoji
  const emoji = answers?.gitmoji ? `${answers?.gitmoji}  ` : ''

  let scope = answers?.scope
    ? `(${answers?.scope
        .replace(/ {2}/g, '--')
        .replace(/ /g, '-')
        .toLowerCase()
        .trim()})`
    : ''
  // @note(ccommit) only add space to scope if format is: gitmoji
  scope = scope && options?.format === COMMIT_FORMATS.GITMOJI ? `${scope} ` : scope

  /**
   * @todo(ccommit) breaking identification in commit subject
   */
  // const breaking = answers?.breaking
  //   ? options?.format === COMMIT_FORMATS.GITMOJI
  //     ? `💥 `
  //     : '!'
  //   : ''

  return format
    .replace(/\{emoji\}/g, emoji)
    .replace(/\{scope\}/g, scope)
    .replace(/\{breaking\}/g, '')
    .replace(/\{title\}/g, answers?.title)
    .replace(/\{type\}/g, answers?.type)
}
export { formatCliEmoji, formatCliType, formatCliTypes, formatCommitSubject }
