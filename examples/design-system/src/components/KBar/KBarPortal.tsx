import { Box, LoadingDots } from '@jeromefitz/design-system/src/components'
import { useFocusTrap } from '@mantine/hooks'
import { KBarPortal, KBarPositioner, KBarAnimator, KBarSearch } from 'kbar'
import dynamic from 'next/dynamic'
import * as React from 'react'

import {
  KBarPositionerStyle,
  KBarAnimatorStyle,
  KBarSearchStyle,
} from './KBar.styles'
import { KBarSubscriptions } from './KBarSubscriptions'

const Loading = () => {
  return (
    <LoadingDots css={{ pr: '$4' }} size="6">
      <span />
      <span />
      <span />
    </LoadingDots>
  )
}

const KBarSearchResults = dynamic(
  () => import('./KBarSearchResults').then((mod: any) => mod.KBarSearchResults),
  {
    loading: Loading,
    ssr: false,
  }
)
const KBarWindowControls = dynamic(
  () => import('./KBarWindowControls').then((mod: any) => mod.KBarWindowControls),
  {
    ssr: false,
  }
)

const _KBarPortal = () => {
  const trap = useFocusTrap()
  return (
    <KBarPortal>
      <KBarPositioner className={KBarPositionerStyle()}>
        <KBarAnimator className={KBarAnimatorStyle()}>
          <KBarWindowControls />
          <Box css={{ pb: '$2', pt: '$4', px: '$4' }} ref={trap}>
            <KBarSubscriptions />
            <KBarSearch
              className={KBarSearchStyle()}
              defaultPlaceholder="Type to search menu"
              type="text"
            />
          </Box>
          <Box css={{ px: '$2' }}>
            <KBarSearchResults />
          </Box>
          <Box css={{ py: '$2' }} />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

export { _KBarPortal as KBarPortal }
