import type { ComponentProps, ReactElement, ReactNode } from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> &
  ComponentProps<typeof TooltipPrimitive.Content> & {
    children: ReactElement
    content: ReactNode
    multiline?: boolean
  }

export type { TooltipProps }
