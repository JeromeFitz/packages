import _last from 'lodash/last.js'

const getTitle = (title: string) => {
  const _title: string = _last(title.split('_')) ?? ''
  if (_title.length > 0) {
    _title
      .replace('Past', 'Cast Emeritus')
      .replace('Musical', 'Musical Director')
      .replace('Technical', 'Technical Director')
  }
}

export default getTitle
