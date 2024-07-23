/* eslint-disable perfectionist/sort-switch-case */
const getInfoType = ({ config, item, meta, routeType }) => {
  const { NOTION } = config

  let date = ''
  const slug = item.properties?.slug

  let as = ''
  const href = `/[...catchAll]`

  switch (routeType) {
    case NOTION.BLOG.routeType:
    case NOTION.EVENTS.routeType:
      date = item.properties[
        NOTION[routeType.toUpperCase()].infoType.key
      ]?.start.slice(0, 10)
      // @todo(NICE-129) eslint
      // eslint-disable-next-line no-case-declarations, no-unsafe-optional-chaining
      const [year, month, day] = date?.split('-')
      as = `/${routeType}/${year}/${month}/${day}/${slug}`
      break
    case NOTION.PODCASTS.routeType:
    case NOTION.EPISODES.routeType:
      as = `/${meta?.join('/')}/${slug}`
      break
    // case NOTION.PEOPLE.routeType:
    // case NOTION.SHOWS.routeType:
    // case NOTION.VENUES.routeType:
    default:
      as = `/${routeType}/${slug}`
      break
  }

  as = as.replace('//', '/')

  return {
    as,
    date,
    href,
    slug,
  }
}

export default getInfoType
