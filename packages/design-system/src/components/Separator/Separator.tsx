import { styled } from '@ds/stitches.config'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

const Separator = styled(SeparatorPrimitive.Root, {
  'aria-hidden': true,
  border: 'none',
  margin: 0,
  flexShrink: 0,
  backgroundColor: '$slate6',
  cursor: 'default',

  variants: {
    size: {
      '1': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$3',
        },

        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$3',
        },
      },
      '2': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$7',
        },

        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$7',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})

export { Separator }
