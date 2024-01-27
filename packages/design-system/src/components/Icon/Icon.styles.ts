import { styled } from '../../lib/stitches.config'

const StyledSVG = styled('svg', {
  defaultVariants: {
    outline: true,
    size: 5,
    variant: 'default',
  },
  variants: {
    outline: {
      true: {
        fill: 'none !important',
      },
    },
    size: {
      1: {
        height: '$space$1',
        width: '$space$1',
      },
      2: {
        height: '$space$2',
        width: '$space$2',
      },
      3: {
        height: '$space$3',
        width: '$space$3',
      },
      4: {
        height: '$space$4',
        width: '$space$4',
      },
      5: {
        height: '$space$5',
        width: '$space$5',
      },
      6: {
        height: '$space$6',
        width: '$space$6',
      },
      7: {
        height: '$space$7',
        width: '$space$7',
      },
      8: {
        height: '$space$8',
        width: '$space$8',
      },
      9: {
        height: '$space$9',
        width: '$space$9',
      },
      10: {
        height: '$space$10',
        width: '$space$10',
      },
      11: {
        height: '$space$11',
        width: '$space$11',
      },
      12: {
        height: '$space$12',
        width: '$space$12',
      },
      13: {
        height: '$space$13',
        width: '$space$13',
      },
      14: {
        height: '$space$14',
        width: '$space$14',
      },
      15: {
        height: '$space$15',
        width: '$space$15',
      },
    },
    variant: {
      default: { fill: 'none', stroke: 'currentColor' },
      error: {
        fill: '$colors$errorEmphasis',
        stroke: '$colors$errorText',
      },
      info: {
        fill: '$colors$infoEmphasis',
        stroke: '$colors$infoText',
      },
      primary: {
        fill: 'none',
        stroke: '$colors$typefacePrimary',
      },
      secondary: {
        fill: 'none',
        stroke: '$colors$typefaceSecondary',
      },
      success: {
        fill: '$colors$succesEmphasis',
        stroke: '$colors$successText',
      },
      tertiary: {
        fill: 'none',
        stroke: '$colors$typefaceTertiary',
      },
      warning: {
        fill: '$colors$warningEmpahsis',
        stroke: '$colors$warningText',
      },
    },
  },
})

const StyledHeroSVG = styled('div', {
  '& > path': {
    strokeWidth: '1.5 !important',
  },
  marginTop: '3px',
})

export { StyledHeroSVG, StyledSVG }
