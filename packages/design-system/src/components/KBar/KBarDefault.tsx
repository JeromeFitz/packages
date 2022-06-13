import { useFocusTrap } from '@mantine/hooks'
import dynamic from 'next/dynamic'

import { Box, Separator } from '../index'

import { KBarFooter } from './KBarFooter'
import { KBarPortal } from './KBarPortal'
// import { KBarSubscriptions } from './KBarSubscriptions'

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
        <Box css={{ py: '$1', px: '$2' }} ref={trap}>
          {/* <KBarSubscriptions /> */}
          <KBarSearch />
        </Box>
        <Separator decorative my="2" size="full" />
        <Box css={{ px: '$2' }}>
          <KBarSearchResults />
        </Box>
        <Box css={{ display: 'none', '@bp1': { display: 'block' } }}>
          <Separator decorative my="2" size="full" />
          <KBarFooter />
        </Box>
        <Box css={{ py: '$2' }} />
      </KBarPortal>
    </>
  )
}

export { KBarDefault }
