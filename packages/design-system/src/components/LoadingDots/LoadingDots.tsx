import { keyframes, styled } from '../../stitches.config'

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

  '& span': {
    animationName: blink,
    animationDuration: '1.4s',
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    backgroundColor: '$colors$gray11',
    borderRadius: '50%',
    display: 'inline-block',
    height: '$$loading-dots-size',
    margin: '0 1px',
    width: '$$loading-dots-size',
  },
  '& span:nth-of-type(1)': { animationDelay: '0s!important' },
  '& span:nth-of-type(even)': { animationDelay: '0.2s' },
  '& span:nth-of-type(odd)': { animationDelay: '0.4s' },

  variants: {
    size: {
      '2': {
        '$$loading-dots-size': '2px',
      },
      '3': {
        '$$loading-dots-size': '3px',
      },
      '4': {
        '$$loading-dots-size': '4px',
      },
      '5': {
        '$$loading-dots-size': '5px',
      },
      '6': {
        '$$loading-dots-size': '6px',
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
})

export { LoadingDots }
