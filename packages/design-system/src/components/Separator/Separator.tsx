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
    margin: {
      '0': {},
      my1: {
        my: '$1',
      },
      my2: {
        my: '$2',
      },
      my3: {
        my: '$3',
      },
      my4: {
        my: '$4',
      },
      my5: {
        my: '$5',
      },
      my6: {
        my: '$6',
      },
      my7: {
        my: '$7',
      },
      my8: {
        my: '$8',
      },
      my9: {
        my: '$9',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})

export { Separator }
