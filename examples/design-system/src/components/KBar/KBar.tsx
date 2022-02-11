import { Box, KBarSubscriptions } from '@jeromefitz/design-system/src/components'
import { useFocusTrap } from '@mantine/hooks'
import dynamic from 'next/dynamic'
import * as React from 'react'

import { KBarWindowControls } from './KBarWindowControls'

const KBarSearch = dynamic(() =>
  import('@jeromefitz/design-system/src/components').then(
    (mod: any) => mod.KBarSearch
  )
)
const KBarSearchResults = dynamic(() =>
  import('@jeromefitz/design-system/src/components').then(
    (mod: any) => mod.KBarSearchResults
  )
)

/**
 * @note must be wrapped by KBarProvider (see: Providers)
 */
const KBar = () => {
  const trap = useFocusTrap()
  return (
    <>
      <KBarWindowControls />
      <Box css={{ pb: '$2', pt: '$4', px: '$4' }} ref={trap}>
        <KBarSubscriptions />
        <KBarSearch />
      </Box>
      <Box css={{ px: '$2' }}>
        <KBarSearchResults />
      </Box>
      <Box css={{ py: '$2' }} />
    </>
  )
}

export { KBar }
