/**
 * https://www.radix-ui.com/primitives/docs/components/tooltip
 */
import { Box, Text } from '../index'

import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './Tooltip.styles'
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
    <TooltipProvider>
      <TooltipRoot open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
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
              <TooltipArrow
                offset={5}
                width={11}
                height={5}
                style={{
                  fill: 'currentColor',
                }}
              />
            </Box>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

export { Tooltip }
