import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { styled } from '../../lib/stitches.config'

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
