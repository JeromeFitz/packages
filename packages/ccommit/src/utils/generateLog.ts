import chalk from 'chalk'

import { LOGS } from '~ccommit/lib'

type GenerateLog = (type: string, message: string, replace?: string) => void

const generateLog: GenerateLog = (type, message, replace) => {
  const msg = replace ? message.replace(/\{REPLACE\}/g, replace) : message

  if (type === LOGS.TYPES.ERROR) {
    return chalk.red(msg)
  }
  if (type === LOGS.TYPES.INFO) {
    return msg
  }
  if (type === LOGS.TYPES.WARNING) {
    return chalk.yellow(msg)
  }
  return chalk.green(msg)
}

export { generateLog }
