import { CSS } from '@ds/stitches.config'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

type TabsListPrimitiveProps = React.ComponentProps<typeof TabsPrimitive.List>
type TabsListProps = TabsListPrimitiveProps & { css?: CSS }

export type { TabsListProps }
