import { useFocusTrap } from '@mantine/hooks'
import dynamic from 'next/dynamic'

import { Box } from '../Box'

import { KBarPortal } from './KBarPortal'
import { KBarSubscriptions } from './KBarSubscriptions'

const KBarSearch = dynamic(() =>
  import('./KBarSearch').then((mod: any) => mod.KBarSearch)
)
const KBarSearchResults = dynamic(() =>
  import('./KBarSearchResults').then((mod: any) => mod.KBarSearchResults)
)

const KBarDefault = () => {
  const trap = useFocusTrap()
  return (
    <>
      <KBarPortal>
        <Box css={{ pb: '$2', pt: '$4', px: '$4' }} ref={trap}>
          <KBarSubscriptions />
          <KBarSearch />
        </Box>
        <Box css={{ px: '$2' }}>
          <KBarSearchResults />
        </Box>
        <Box css={{ py: '$2' }} />
      </KBarPortal>
    </>
  )
}

export { KBarDefault }
