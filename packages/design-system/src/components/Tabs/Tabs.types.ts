import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import { CSS } from '../../lib/stitches.config'

type TabsListPrimitiveProps = React.ComponentProps<typeof TabsPrimitive.List>
type TabsListProps = TabsListPrimitiveProps & { css?: CSS }

export type { TabsListProps }
