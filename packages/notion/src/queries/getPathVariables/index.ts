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

import { getDataType } from '../../utils'

const getPathVariables = ({ config, catchAll }) => {
  const { NOTION, PAGES__HOMEPAGE, ROUTE_TYPES } = config
  const size: number = _size(catchAll)
  const first: any = _first(catchAll)
  const last: any = _last(catchAll)

  const meta =
    size > 1 &&
    _includes(
      // @question(notion) what do these have in common?
      [NOTION.BLOG.routeType, NOTION.EVENTS.routeType, NOTION.PODCASTS.routeType],
      first
    )
      ? _drop(catchAll)
      : _drop(_dropRight(catchAll))
  const routeType =
    first === last && !_includes(ROUTE_TYPES, first) ? 'pages' : first
  const slug = first !== last && !_isInteger(parseInt(last)) ? last : first

  const isPage = routeType === 'pages'
  const isIndex = slug === first
  const hasMeta = !!meta && _size(meta) !== 0

  const url = isPage && first === PAGES__HOMEPAGE ? '' : _join(catchAll, '/')

  const pathVariables = {
    hasMeta,
    isPage,
    isIndex,
    meta,
    routeType,
    slug,
    url,
  }

  const dataType = getDataType(pathVariables)

  return {
    ...pathVariables,
    dataType,
  }
}

export default getPathVariables
