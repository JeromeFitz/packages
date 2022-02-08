import { styled } from '@ds/stitches.config'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const TooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: '$transparentPanel',
  borderRadius: '$1',
  padding: '$1 $2',

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
})

export { TooltipContent }
