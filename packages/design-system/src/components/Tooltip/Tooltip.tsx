import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { Box, Text } from '../../components'

import { TooltipContent } from './Tooltip.styles'
import type { TooltipProps } from './Tooltip.types'

function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  multiline,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipContent
        side="top"
        align="center"
        sideOffset={5}
        {...props}
        multiline={multiline}
      >
        <Text
          size="1"
          as="p"
          css={{
            color: '$loContrast',
            lineHeight: multiline ? '20px' : (undefined as any),
          }}
        >
          {content}
        </Text>
        <Box css={{ color: '$transparentExtreme' }}>
          <TooltipPrimitive.Arrow
            offset={5}
            width={11}
            height={5}
            style={{
              fill: 'currentColor',
            }}
          />
        </Box>
      </TooltipContent>
    </TooltipPrimitive.Root>
  )
}

export { Tooltip }
