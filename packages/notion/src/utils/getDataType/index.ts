import { DATA_TYPES } from '../../constants'

/**
 * @info dataType
 *
 * 1 = (isPage) DATA_TYPES.SLUG
 * ex) /about
 *     /colophon
 *     /contact
 *
 * 2 = (isIndex && !hasMeta) DATA_TYPES.LISTING
 * ex) /blog
 *     /events
 *     /podcasts
 *
 * 3 = (isIndex && hasMeta) DATA_TYPES.LISTING_BY_DATE
 * ex) /blog/2020
 *     /blog/2020/05
 *     /blog/2020/05/09
 *     /events/2020
 *     /events/2020/05
 *     /events/2020/05/09,
 *
 * 4 = (hasMeta) DATA_TYPES.SLUG_BY_ROUTE
 * ex) /blog/2020/05/09/title
 *     /events/2020/05/09/title,
 *     /podcasts/knockoffs/[slug]
 *
 * 5 = (else) DATA_TYPES.SLUG
 * ex) /shows/[slug]
 *     /events/2020/05/09/[slug],
 *     /podcasts/[slug]
 *
 */
const getDataType = ({ isPage, isIndex, hasMeta }) => {
  if (isPage) return DATA_TYPES.SLUG
  if (isIndex && !hasMeta) return DATA_TYPES.LISTING
  if (isIndex && hasMeta) return DATA_TYPES.LISTING_BY_DATE
  if (hasMeta) return DATA_TYPES.SLUG_BY_ROUTE
  return DATA_TYPES.SLUG
}

export default getDataType
