/**
 * https://www.radix-ui.com/docs/primitives/components/tabs
 */
import * as React from 'react'

import { Separator } from '../index'

import { StyledTabsList } from './Tabs.styles'
import type { TabsListProps } from './Tabs.types'

const TabsList = React.forwardRef<
  React.ElementRef<typeof StyledTabsList>,
  TabsListProps
>((props, forwardedRef) => (
  <>
    <StyledTabsList {...props} ref={forwardedRef} />
    <Separator />
  </>
))
TabsList.displayName = 'TabsList'

export { TabsList }
