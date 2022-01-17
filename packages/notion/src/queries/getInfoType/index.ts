const getInfoType = ({ config, item, routeType, meta }) => {
  const { NOTION } = config

  let date = ''
  const slug = item.properties?.slug

  let as = ''
  const href = `/[...catchAll]`

  switch (routeType) {
    case NOTION.BLOG.routeType:
      date = item.properties?.datePublished?.start.slice(0, 10)
      const [yearB, monthB, dayB] = date?.split('-')
      as = `/${routeType}/${yearB}/${monthB}/${dayB}/${slug}`
      break
    case NOTION.EVENTS.routeType:
      date = item.properties?.dateEvent?.start.slice(0, 10)
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
