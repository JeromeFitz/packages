import { LOGS, TITLE } from '~ccommit/lib/index'
import { generateCount } from '~ccommit/utils/index'

const getCharsLeft = (str: string) => {
  const chars = str.length
  const message = chars.toString()
  let logType = LOGS.TYPES.SUCCESS

  if (chars < TITLE.MIN || chars > TITLE.MAX) {
    logType = LOGS.TYPES.ERROR
  } else if (chars < TITLE.MIN_SWAG || chars > TITLE.MAX_SWAG) {
    logType = LOGS.TYPES.WARNING
  }
  return generateCount(logType, LOGS.MESSAGES.REPLACE, message)
}

export { getCharsLeft }
