import { styled } from '../../lib/stitches.config'
// import { Button, Select, TextField } from '../index'
import { Button } from '../Button/Button'
import { Select } from '../Select/Select'
import { TextField } from '../TextField/TextField'

const ControlGroup = styled('div', {
  display: 'flex',

  // Make sure ControlGroup and its children don't affect normal stacking order
  position: 'relative',
  zIndex: 0,

  [`& ${Button}`]: {
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
    '&:hover': {
      boxShadow:
        '-1px 0 $colors$slate8, inset 0 1px $colors$slate8, inset -1px 0 $colors$slate8, inset 0 -1px $colors$slate8',
    },
    '&:focus': {
      zIndex: 1,
      boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
    },
    '&:first-child': {
      borderTopLeftRadius: '$1',
      borderBottomLeftRadius: '$1',
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
      '&:hover': {
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
      },
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
      },
    },
    '&:last-child': {
      borderTopRightRadius: '$1',
      borderBottomRightRadius: '$1',
      boxShadow:
        'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
      },
    },
  },
  [`& ${TextField}`]: {
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
    '&:focus': {
      zIndex: 1,
      boxShadow:
        'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    },
    '&:first-child': {
      borderTopLeftRadius: '$1',
      borderBottomLeftRadius: '$1',
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
      '&:focus': {
        boxShadow:
          'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      },
    },
    '&:last-child': {
      borderTopRightRadius: '$1',
      borderBottomRightRadius: '$1',
      boxShadow:
        'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
      '&:focus': {
        boxShadow:
          'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      },
    },
  },
  [`& ${Select}`]: {
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
    '&:focus-within': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    },
    '&:first-child': {
      borderTopLeftRadius: '$1',
      borderBottomLeftRadius: '$1',
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
      '&:focus-within': {
        boxShadow:
          'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      },
    },
    '&:last-child': {
      borderTopRightRadius: '$1',
      borderBottomRightRadius: '$1',
      boxShadow:
        'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
      '&:focus-within': {
        boxShadow:
          'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
      },
    },
  },
})

export { ControlGroup }
