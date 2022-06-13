/**
 * https://www.radix-ui.com/docs/primitives/components/separator
 */
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { styled } from '../../lib/stitches.config'

const Separator = styled(SeparatorPrimitive.Root, {
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
      full: {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '100%',
        },

        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '100%',
        },
      },
    },
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
  },
  defaultVariants: {
    size: '1',
  },
})

export { Separator }
