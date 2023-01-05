import colors from 'ansi-colors'

import { LOGS } from '~ccommit/lib/index.js'

type GenerateLog = (type: string, message: string, replace?: string) => void
/**
 * @todo(ccommit) this is a bit much, can we reduce?
 */
const generateLog: GenerateLog = (type, message, replace) => {
  let msg = replace ? message.replace(/\{REPLACE\}/g, replace) : message
  msg = `\n${msg}\n`

  if (type === LOGS.TYPES.ERROR) {
    return colors.magenta.bold(msg)
  }
  if (type === LOGS.TYPES.INFO) {
    return colors.blue.bold(msg)
  }
  if (type === LOGS.TYPES.WARNING) {
    return colors.yellow.bold(msg)
  }
  return colors.green.bold(msg)
}

const generateCount: GenerateLog = (type, message, replace) => {
  const msg = replace ? message.replace(/\{REPLACE\}/g, replace) : message

  if (type === LOGS.TYPES.ERROR) {
    return colors.red.bold(msg)
  }
  if (type === LOGS.TYPES.INFO) {
    return colors.white.bold(msg)
  }
  if (type === LOGS.TYPES.WARNING) {
    return colors.yellow.bold(msg)
  }
  return colors.green.bold(msg)
}

export { generateCount, generateLog }
