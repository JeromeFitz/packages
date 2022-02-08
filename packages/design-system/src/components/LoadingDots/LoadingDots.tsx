import { keyframes, styled } from '@ds/stitches.config'

const blink = keyframes({
  '0%': {
    opacity: '0.2',
  },
  '20%': {
    opacity: '1',
  },
  to: {
    opacity: '0.2',
  },
})

const LoadingDots = styled('span', {
  '$$loading-dots-height': 'auto',
  // '$$loading-dots-size': '2px',
  alignItems: 'center',
  display: 'inline-flex',
  height: '$$loading-dots-height',

  '& span ': {
    animationName: blink,
    animationDuration: '1.4s',
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    backgroundColor: 'black',
    borderRadius: '50%',
    display: 'inline-block',
    // height: '$$loading-dots-size',
    margin: '0 1px',
    // width: '$$loading-dots-size',
  },
  '& span:nth-of-type(1) ': { animationDelay: '0s!important' },
  '& span:nth-of-type(even) ': { animationDelay: '0.2s' },
  '& span:nth-of-type(odd) ': { animationDelay: '0.4s' },

  variants: {
    size: {
      '1': {
        '$$loading-dots-size': '1px!important',
        '& span ': { height: '$$loading-dots-size', width: '$$loading-dots-size' },
      },
      '2': {
        '$$loading-dots-size': '2px!important',
        '& span ': { height: '$$loading-dots-size', width: '$$loading-dots-size' },
      },
      '3': {
        '$$loading-dots-size': '3px!important',
        '& span ': { height: '$$loading-dots-size', width: '$$loading-dots-size' },
      },
      '4': {
        '$$loading-dots-size': '4px!important',
        '& span ': { height: '$$loading-dots-size', width: '$$loading-dots-size' },
      },
      '5': {
        '$$loading-dots-size': '5px!important',
        '& span ': { height: '$$loading-dots-size', width: '$$loading-dots-size' },
      },
      '6': {
        '$$loading-dots-size': '6px!important',
        '& span ': { height: '$$loading-dots-size', width: '$$loading-dots-size' },
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
})

export { LoadingDots }
