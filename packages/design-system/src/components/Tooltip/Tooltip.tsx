/**
 * https://www.radix-ui.com/primitives/docs/components/tooltip
 */
import type { TooltipProps } from './Tooltip.types'

import { Box, Text } from '../index'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './Tooltip.styles'

function Tooltip({
  children,
  content,
  defaultOpen,
  multiline,
  onOpenChange,
  open,
  ...props
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot defaultOpen={defaultOpen} onOpenChange={onOpenChange} open={open}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            align="center"
            side="top"
            sideOffset={5}
            {...props}
            multiline={multiline}
          >
            <Text
              as="p"
              css={{
                color: '$loContrast',
                lineHeight: multiline ? '20px' : (undefined as any),
              }}
              size="1"
            >
              {content}
            </Text>
            <Box css={{ color: '$transparentExtreme' }}>
              <TooltipArrow
                height={5}
                offset={5}
                style={{
                  fill: 'currentColor',
                }}
                width={11}
              />
            </Box>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

export { Tooltip }
