import { styled } from '../../lib/stitches.config'

const Alert = styled('div', {
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  border: '2px solid',

  borderRadius: '$2',
  // @reset
  boxSizing: 'border-box',

  color: '$hiContrast',

  defaultVariants: {
    variant: 'loContrast',
  },
  variants: {
    variant: {
      brand: {
        backgroundColor: '$brand3',
        borderColor: '$brand6',
        color: '$brand11',
      },
      error: {
        backgroundColor: '$errorBackground',
        borderColor: '$errorBorder',
        color: '$errorText',
      },
      info: {
        backgroundColor: '$infoBackground',
        borderColor: '$infoBorder',
        color: '$infoText',
      },
      loContrast: {
        // backgroundColor: '$loContrast',
        borderColor: '$hiContrast',
      },
      success: {
        backgroundColor: '$successBackground',
        borderColor: '$successBorder',
        color: '$successText',
      },
      warning: {
        backgroundColor: '$warningBackground',
        borderColor: '$warningBorder',
        color: '$warningText',
      },
    },
  },
})

export { Alert }
