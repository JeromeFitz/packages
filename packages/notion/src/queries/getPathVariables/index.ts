/**
 * @refactor(lodash)
 */
import _drop from 'lodash/drop.js'
import _dropRight from 'lodash/dropRight.js'
import _first from 'lodash/first.js'
import _includes from 'lodash/includes.js'
import _isInteger from 'lodash/isInteger.js'
import _join from 'lodash/join.js'
import _last from 'lodash/last.js'
import _size from 'lodash/size.js'

// import { DATA_TYPES } from '../../constants/index.js'
import { getDataType } from '../../utils/index.js'

const getPathVariables = ({ catchAll, config }) => {
  const { NOTION, PAGES__HOMEPAGE, ROUTE_META, ROUTE_TYPES } = config
  const size: number = _size(catchAll)
  const first: any = _first(catchAll)
  const FIRST = first.toUpperCase()
  const last: any = _last(catchAll)
  // const LAST = last.toUpperCase()

  const meta =
    size > 1 && _includes(ROUTE_META, FIRST)
      ? _drop(catchAll)
      : _drop(_dropRight(catchAll))

  const routeType =
    first === last && !_includes(ROUTE_TYPES, FIRST) ? NOTION.PAGES.routeType : first
  // biome-ignore lint/correctness/useParseIntRadix: migrate
  const slug = first !== last && !_isInteger(parseInt(last)) ? last : first

  const isPage = routeType === NOTION.PAGES.routeType.toLowerCase()
  const isIndex = slug === first
  const hasMeta = !!meta && _size(meta) !== 0

  const url = isPage && first === PAGES__HOMEPAGE ? '' : _join(catchAll, '/')

  const pathVariables = {
    hasMeta,
    isIndex,
    isPage,
    meta,
    routeType,
    slug,
    url,
  }

  // console.dir(`> pathVariables`)
  // console.dir(pathVariables)

  const dataType = getDataType(pathVariables)

  return {
    ...pathVariables,
    dataType,
  }
}

export default getPathVariables
