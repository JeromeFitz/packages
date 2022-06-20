import { styled } from '../../lib/stitches.config'

const Alert = styled('div', {
  // @reset
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  border: '2px solid',
  borderRadius: '$2',

  color: '$hiContrast',

  variants: {
    variant: {
      loContrast: {
        // backgroundColor: '$loContrast',
        borderColor: '$hiContrast',
      },
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
  defaultVariants: {
    variant: 'loContrast',
  },
})

export { Alert }
