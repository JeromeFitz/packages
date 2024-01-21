import { DATA_TYPES } from '../../constants/index.js'

/**
 * @info dataType
 *       pathVariables via `../../queries/pathVariables`
 *
 * 1 = (isPage) DATA_TYPES.SLUG
 * ex) /about
 *     /colophon
 *     /contact
 *     => routeType = pages
 *     @note no ability for second tier at the moment for non-db
 *           otherwise these would have to be `/pages/about`
 *
 * 2 = (isIndex && !hasMeta) DATA_TYPES.LISTING
 * ex) /blog
 *     /events
 *     /podcasts
 *     => routeType = routeType
 *        @note
 *          - events should only be "upcoming events"
 *          - blog should be all-time (handled by pagination)
 *
 * 3 = (isIndex && hasMeta) DATA_TYPES.LISTING_BY_DATE
 * ex) /blog/yyyy
 *     /blog/yyyy/mm
 *     /blog/yyyy/mm/dd
 *     /events/yyyy
 *     /events/yyyy/mm
 *     /events/yyyy/mm/dd
 *     => routeType = routeType
 *        @note These are each `index` pages for certain routeTypes
 *
 * 4 = (hasMeta) DATA_TYPES.SLUG_BY_ROUTE
 * ex) /blog/yyyy/mm/dd/[slug]
 *       => parentRouteType = blog
 *       => routeType = blog
 *          @note determine [yyyy-mm-dd] from data via slug
 *     /events/yyyy/mm/dd/[slug],
 *       => parentRouteType = events
 *       => routeType = events
 *          @note determine [yyyy-mm-dd] from data via slug
 *     /podcasts/[podcasts-slug]/[slug]
 *       => parentRouteType = podcasts
 *       => routeType = episodes
 *          @note determine [podcasts-slug] from data via slug
 *
 * 5 = (else) DATA_TYPES.SLUG
 * ex) /shows/[slug]
 *     /events/yyyy/mm/dd/[slug]
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
