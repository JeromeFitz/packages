import { LOGS, SCOPE, TITLE } from '~ccommit/lib'
import { generateLog } from '~ccommit/utils'

const getCharsLeftText = (str: string) => {
  const chars = str.length
  const message = chars.toString()
  let logType = LOGS.TYPES.SUCCESS

  if (chars < TITLE.MIN || chars > TITLE.MAX) {
    logType = LOGS.TYPES.ERROR
  } else if (chars < TITLE.MIN_SWAG || chars > TITLE.MAX_SWAG) {
    logType = LOGS.TYPES.WARNING
  }
  return generateLog(logType, LOGS.MESSAGES.REPLACE, message)
}

const scope = (str: string) => {
  const chars = str.length
  if (chars === 0) {
    return true
  } else if (chars < SCOPE.MIN) {
    return generateLog(
      LOGS.TYPES.ERROR,
      LOGS.MESSAGES.LENGTH_MIN,
      SCOPE.MIN.toString()
    )
  } else if (chars > SCOPE.MAX) {
    return generateLog(
      LOGS.TYPES.ERROR,
      LOGS.MESSAGES.LENGTH_MAX,
      SCOPE.MAX.toString()
    )
  } else {
    return true
  }
}

const title = (str: string) => {
  const chars = str.length
  if (chars < TITLE.MIN) {
    return generateLog(
      LOGS.TYPES.ERROR,
      LOGS.MESSAGES.LENGTH_MIN,
      TITLE.MIN.toString()
    )
  } else if (chars > TITLE.MAX) {
    return generateLog(
      LOGS.TYPES.ERROR,
      LOGS.MESSAGES.LENGTH_MAX,
      TITLE.MAX.toString()
    )
  } else {
    return true
  }
}

const validate = {
  getCharsLeftText,
  scope,
  title,
}

export default validate
