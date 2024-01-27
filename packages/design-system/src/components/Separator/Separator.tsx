/**
 * https://www.radix-ui.com/primitives/docs/components/separator
 */
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { styled } from '../../lib/stitches.config'

const Separator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$slate6',
  border: 'none',
  cursor: 'default',
  defaultVariants: {
    size: '1',
  },
  flexShrink: 0,

  margin: 0,
  variants: {
    my: {
      '0': {
        my: '0',
      },
      '1': {
        my: '$1',
      },
      '2': {
        my: '$2',
      },
      '3': {
        my: '$3',
      },
      '4': {
        my: '$4',
      },
      '5': {
        my: '$5',
      },
      '6': {
        my: '$6',
      },
      '7': {
        my: '$7',
      },
      '8': {
        my: '$8',
      },
      '9': {
        my: '$9',
      },
    },
    size: {
      '1': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$3',
        },

        '&[data-orientation="vertical"]': {
          height: '$3',
          width: '1px',
        },
      },
      '2': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$7',
        },

        '&[data-orientation="vertical"]': {
          height: '$7',
          width: '1px',
        },
      },
      full: {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '100%',
        },

        '&[data-orientation="vertical"]': {
          height: '100%',
          width: '1px',
        },
      },
    },
  },
})

export { Separator }
