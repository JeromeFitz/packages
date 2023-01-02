import pico from 'picocolors'
const { green, yellow, red } = pico

import { LOGS } from '~ccommit/lib'

type GenerateLog = (type: string, message: string, replace?: string) => void

const generateLog: GenerateLog = (type, message, replace) => {
  const msg = replace ? message.replace(/\{REPLACE\}/g, replace) : message

  if (type === LOGS.TYPES.ERROR) {
    return red(msg)
  }
  if (type === LOGS.TYPES.INFO) {
    return msg
  }
  if (type === LOGS.TYPES.WARNING) {
    return yellow(msg)
  }
  return green(msg)
}

export { generateLog }
