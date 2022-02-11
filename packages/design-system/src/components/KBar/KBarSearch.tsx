import { KBarSearch } from 'kbar'

import { KBarSearchStyle } from './KBar.styles'

const _KBarSearch = () => {
  return (
    <KBarSearch
      className={KBarSearchStyle()}
      defaultPlaceholder="Type to search menu"
      type="text"
    />
  )
}

export { _KBarSearch as KBarSearch }
