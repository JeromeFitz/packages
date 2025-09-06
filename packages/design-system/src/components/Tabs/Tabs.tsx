/**
 * https://www.radix-ui.com/primitives/docs/components/tabs
 */
import type { ElementRef } from 'react'

import type { TabsListProps } from './Tabs.types'

import { forwardRef } from 'react'

import { Separator } from '../index'
import { StyledTabsList } from './Tabs.styles'

const TabsList = forwardRef<ElementRef<typeof StyledTabsList>, TabsListProps>(
  (props, forwardedRef) => (
    <>
      <StyledTabsList {...props} ref={forwardedRef} />
      <Separator />
    </>
  ),
)
TabsList.displayName = 'TabsList'

export { TabsList }
