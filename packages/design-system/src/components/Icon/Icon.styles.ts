import { styled } from '../../lib/stitches.config'

const StyledSVG = styled('svg', {
  variants: {
    variant: {
      default: { stroke: 'currentColor', fill: 'none' },
      primary: {
        stroke: '$colors$typefacePrimary',
        fill: 'none',
      },
      secondary: {
        stroke: '$colors$typefaceSecondary',
        fill: 'none',
      },
      tertiary: {
        stroke: '$colors$typefaceTertiary',
        fill: 'none',
      },
      info: {
        stroke: '$colors$infoText',
        fill: '$colors$infoEmphasis',
      },
      error: {
        stroke: '$colors$errorText',
        fill: '$colors$errorEmphasis',
      },
      success: {
        stroke: '$colors$successText',
        fill: '$colors$succesEmphasis',
      },
      warning: {
        stroke: '$colors$warningText',
        fill: '$colors$warningEmpahsis',
      },
    },
    outline: {
      true: {
        fill: 'none !important',
      },
    },
    size: {
      1: {
        width: '$space$1',
        height: '$space$1',
      },
      2: {
        width: '$space$2',
        height: '$space$2',
      },
      3: {
        width: '$space$3',
        height: '$space$3',
      },
      4: {
        width: '$space$4',
        height: '$space$4',
      },
      5: {
        width: '$space$5',
        height: '$space$5',
      },
      6: {
        width: '$space$6',
        height: '$space$6',
      },
      7: {
        width: '$space$7',
        height: '$space$7',
      },
      8: {
        width: '$space$8',
        height: '$space$8',
      },
      9: {
        width: '$space$9',
        height: '$space$9',
      },
      10: {
        width: '$space$10',
        height: '$space$10',
      },
      11: {
        width: '$space$11',
        height: '$space$11',
      },
      12: {
        width: '$space$12',
        height: '$space$12',
      },
      13: {
        width: '$space$13',
        height: '$space$13',
      },
      14: {
        width: '$space$14',
        height: '$space$14',
      },
      15: {
        width: '$space$15',
        height: '$space$15',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    outline: true,
    size: 5,
  },
})

const StyledHeroSVG = styled('div', {
  marginTop: '3px',
  '& > path': {
    strokeWidth: '1.75 !important',
  },
})

export { StyledHeroSVG, StyledSVG }
