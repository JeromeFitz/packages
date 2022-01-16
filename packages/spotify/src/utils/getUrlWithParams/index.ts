import { LIMIT, OFFSET } from '../../constants'
import type { QueryProps } from '../../index'

interface UrlProps extends QueryProps {
  url: string
}

const getUrlWithParams = ({
  limit = LIMIT,
  offset = OFFSET,
  url,
  time_range = 'medium_term',
}: UrlProps): string => {
  // @hack(yuck)
  const params: any[] = []
  if (!!limit) params.push(`limit=${limit}`)
  if (!!offset) params.push(`offset=${offset}`)
  if (!!time_range) params.push(`time_range=${time_range}`)

  return url + '?' + params.join('&')
}

export default getUrlWithParams
