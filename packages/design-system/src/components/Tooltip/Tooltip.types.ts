import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root> &
  React.ComponentProps<typeof TooltipPrimitive.Content> & {
    children: React.ReactElement
    content: React.ReactNode
    multiline?: boolean
  }

export type { TooltipProps }
