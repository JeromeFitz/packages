import type * as TabsPrimitive from '@radix-ui/react-tabs'
import type { ComponentProps } from 'react'

import type { CSS } from '../../lib/stitches.config'

type TabsListPrimitiveProps = ComponentProps<typeof TabsPrimitive.List>
type TabsListProps = TabsListPrimitiveProps & { css?: CSS }

export type { TabsListProps }
