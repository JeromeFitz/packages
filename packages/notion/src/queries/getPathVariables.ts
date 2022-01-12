import _drop from 'lodash/drop'
import _dropRight from 'lodash/dropRight'
import _first from 'lodash/first'
import _includes from 'lodash/includes'
import _isInteger from 'lodash/isInteger'
import _join from 'lodash/join'
import _last from 'lodash/last'
import _size from 'lodash/size'

import { DATA_TYPES } from '../helper'

// @todo(complexity) 16
// eslint-disable-next-line complexity
const getPathVariables = ({ config, catchAll }) => {
  const { NOTION, PAGES__HOMEPAGE, ROUTE_TYPES } = config
  const size: number = _size(catchAll)
  const first: any = _first(catchAll)
  const last: any = _last(catchAll)

  const meta =
    size > 1 &&
    _includes(
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

  /**
   * @info
   *
   * 1 = /about, /colophon, /contact
   * 2 = /blog, /events, /podcasts
   * 3 = /blog/2020, /blog/2020/05, /blog/2020/05/09
   *     /events/2020, /events/2020/05, /events/2020/05/09,
   * 4 = /blog/2020/05/09/title, /events/2020/05/09/title,
   *     /podcasts/knockoffs/i-know-what-you-did-last-summer
   * 5 = /shows/alex-o-jerome, /events/2020/05/09/jerome-and,
   *     /podcasts/knockoffs
   */
  let dataType = DATA_TYPES.SLUG
  if (isPage) {
    dataType = DATA_TYPES.SLUG
  } else if (isIndex && !hasMeta) {
    dataType = DATA_TYPES.LISTING
  } else if (isIndex && hasMeta) {
    dataType = DATA_TYPES.LISTING_BY_DATE
  } else if (hasMeta) {
    dataType = DATA_TYPES.SLUG_BY_ROUTE
  } else {
    dataType = DATA_TYPES.SLUG
  }

  /**
   * @debug
   */
  // console.dir(`------`)
  // console.dir(`routeType: ${routeType}`)
  // console.dir(`slug: ${slug}`)
  // console.dir(`isPage:  ${isPage}`)
  // console.dir(`isIndex:  ${isIndex}`)
  // console.dir(`hasMeta: ${hasMeta}`)
  // console.dir(`dataType: ${dataType}`)
  // console.dir(`meta:`)
  // console.dir(meta)

  const pathVariables = {
    dataType,
    hasMeta,
    isPage,
    isIndex,
    meta,
    routeType,
    slug,
    url,
  }

  return pathVariables
}

export default getPathVariables
