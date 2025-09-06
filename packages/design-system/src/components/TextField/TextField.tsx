import { styled } from '../../lib/stitches.config'

const TextField = styled('input', {
  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3',
  },
  '&:-webkit-autofill::first-line': {
    color: '$hiContrast',
    fontFamily: '$sans',
    fontSize: '1rem',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::placeholder': {
    color: '$slate9',
  },
  '&:disabled': {
    '&::placeholder': {
      color: '$slate7',
    },
    backgroundColor: '$slate2',
    color: '$slate8',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  '&:focus': {
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3',
    },
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
  },
  '&:read-only': {
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate7',
    },
    backgroundColor: '$slate2',
  },
  // @reset
  appearance: 'none',
  // @custom
  backgroundColor: '$loContrast',
  borderWidth: '0',

  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  boxSizing: 'border-box',
  color: '$hiContrast',
  defaultVariants: {
    size: '1',
  },

  fontFamily: 'inherit',

  fontSize: '1rem',

  fontVariantNumeric: 'tabular-nums',
  margin: '0',
  outline: 'none',
  padding: '0',

  variants: {
    cursor: {
      default: {
        '&:focus': {
          cursor: 'text',
        },
        cursor: 'default',
      },
      text: {
        cursor: 'text',
      },
    },
    size: {
      '1': {
        '@bp1': {
          '&:-webkit-autofill::first-line': {
            fontSize: '$1',
          },
          fontSize: '$1',
        },
        borderRadius: '$1',
        height: '$5',
        lineHeight: '$sizes$5',
        px: '$1',
      },
      '2': {
        '@bp1': {
          '&:-webkit-autofill::first-line': {
            fontSize: '$3',
          },
          fontSize: '$3',
        },
        borderRadius: '$2',
        height: '$6',
        lineHeight: '$sizes$6',
        px: '$2',
      },
    },
    state: {
      invalid: {
        '&:focus': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8',
        },
        boxShadow: 'inset 0 0 0 1px $colors$red7',
      },
      valid: {
        '&:focus': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8',
        },
        boxShadow: 'inset 0 0 0 1px $colors$green7',
      },
    },
    variant: {
      ghost: {
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slateA7',
          },
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow:
            'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
  },
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  width: '100%',
})

TextField.toString = () => `.${TextField.className}`

export { TextField }
