import { styled } from '../../lib/stitches.config'
// import { Button, Select, TextField } from '../index'
import { Button } from '../Button/Button'
import { Select } from '../Select/Select'
import { TextField } from '../TextField/TextField'

const ControlGroup = styled('div', {
  [`& ${Button}`]: {
    '&:first-child': {
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
      },
      '&:hover': {
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
      },
      borderBottomLeftRadius: '$1',
      borderTopLeftRadius: '$1',
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
    },
    '&:focus': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
      zIndex: 1,
    },
    '&:hover': {
      boxShadow:
        '-1px 0 $colors$slate8, inset 0 1px $colors$slate8, inset -1px 0 $colors$slate8, inset 0 -1px $colors$slate8',
    },
    '&:last-child': {
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
      },
      borderBottomRightRadius: '$1',
      borderTopRightRadius: '$1',
      boxShadow:
        'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
    },
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
  },

  [`& ${Select}`]: {
    '&:first-child': {
      '&:focus-within': {
        boxShadow:
          'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      },
      borderBottomLeftRadius: '$1',
      borderTopLeftRadius: '$1',
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
    },
    '&:focus-within': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    },
    '&:last-child': {
      '&:focus-within': {
        boxShadow:
          'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      },
      borderBottomRightRadius: '$1',
      borderTopRightRadius: '$1',
      boxShadow:
        'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
    },
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
  },
  [`& ${TextField}`]: {
    '&:first-child': {
      '&:focus': {
        boxShadow:
          'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      },
      borderBottomLeftRadius: '$1',
      borderTopLeftRadius: '$1',
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
    },
    '&:focus': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      zIndex: 1,
    },
    '&:last-child': {
      '&:focus': {
        boxShadow:
          'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      },
      borderBottomRightRadius: '$1',
      borderTopRightRadius: '$1',
      boxShadow:
        'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
    },
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
  },

  display: 'flex',
  // Make sure ControlGroup and its children don't affect normal stacking order
  position: 'relative',
  zIndex: 0,
})

export { ControlGroup }
