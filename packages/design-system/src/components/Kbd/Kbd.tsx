import { styled } from '../../lib/stitches.config'

const Kbd = styled('kbd', {
  alignItems: 'center',
  backgroundColor: '$loContrast',
  boxShadow: `
    inset 0 0.5px rgba(255, 255, 255, 0.1),
    inset 0 1px 5px $colors$slate2,
    0px 0px 0px 0.5px $colors$slate8,
    0px 2px 1px -1px $colors$slate8,
    0 1px $colors$slate8`,
  boxSizing: 'border-box',
  color: '$hiContrast',
  compoundVariants: [
    {
      css: {
        width: '3em',
      },
      size: '1',
      width: 'shift',
    },
    {
      css: {
        width: '2.5em',
      },
      size: '1',
      width: 'command',
    },
    {
      css: {
        width: '5em',
      },
      size: '1',
      width: 'space',
    },
  ],
  cursor: 'default',
  defaultVariants: {
    size: '2',
  },
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontVariationSettings: '"wght" $fontWeights$4',
  fontWeight: '$fontWeights$4',
  justifyContent: 'center',
  lineHeight: '1.5',
  mx: '$1',
  textShadow: '0 0 1px rgba(255, 255, 255, 0.5)',

  userSelect: 'none',

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        fontSize: '$1',
        height: '$4',
        lineHeight: '$spaces$4',
        minWidth: '1.6em',
        px: '$2',
      },
      '2': {
        borderRadius: '$2',
        fontSize: '$2',
        height: '$6',
        lineHeight: '$spaces$6',
        minWidth: '2em',
        px: '$3',
      },
    },
    width: {
      command: {
        justifyContent: 'flex-end',
        width: '3em',
      },
      shift: {
        justifyContent: 'flex-start',
        width: '4em',
      },
      space: {
        width: '8em',
      },
    },
  },

  whiteSpace: 'nowrap',
})

export { Kbd }
