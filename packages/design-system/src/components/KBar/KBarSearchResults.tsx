import { KBarResults, useMatches } from 'kbar'

import { KBarSearchResult } from './index'

const KBarSearchResults = () => {
  const { results } = useMatches()

  return <KBarResults items={results} onRender={KBarSearchResult} />
}

export { KBarSearchResults }
