import type * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { ComponentProps, ReactElement, ReactNode } from 'react'

type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> &
  ComponentProps<typeof TooltipPrimitive.Content> & {
    children: ReactElement
    content: ReactNode
    multiline?: boolean
  }

export type { TooltipProps }
