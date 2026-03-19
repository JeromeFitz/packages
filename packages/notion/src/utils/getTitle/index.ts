import _last from 'lodash/last'

/**
 * @note this should be in the website repo as it’s custom
 * *cough* more custom than _waves vaguely all-around_ all of this
 */
const getTitle = (title: string) => {
  const _title: string = _last(title.split('_')) ?? ''

  // biome-ignore lint/complexity/noExtraBooleanCast: migrate
  if (!!_title) {
    return _title
      .replace('Past', 'Cast Emeritus')
      .replace('Musical', 'Musical Director')
      .replace('Technical', 'Technical Director')
  }

  return _title
}

export default getTitle
