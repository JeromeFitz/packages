import { LayoutGroup } from 'framer-motion'
import { KBarResults, useMatches } from 'kbar'

import { KBarSearchResult } from './KBarSearchResult'

const KBarSearchResults = () => {
  const { results } = useMatches()

  return (
    <LayoutGroup id={`kbar-layout-group`}>
      <KBarResults items={results} onRender={KBarSearchResult} />
    </LayoutGroup>
  )
}

export { KBarSearchResults }
