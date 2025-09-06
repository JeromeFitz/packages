import { styled } from '../../lib/stitches.config'

const TextArea = styled('textarea', {
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
    resize: 'none',
  },
  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    zIndex: '1',
  },
  '&:read-only': {
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate7',
    },
    backgroundColor: '$slate2',
  },
  // @reset
  appearance: 'none',
  backgroundColor: '$loContrast',
  borderWidth: '0',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  color: '$hiContrast',
  defaultVariants: {
    size: '1',
  },
  fontFamily: 'inherit',
  fontSize: '1rem',
  fontVariantNumeric: 'tabular-nums',
  margin: '0',
  minHeight: 80,

  outline: 'none',
  padding: '$1',
  position: 'relative',
  resize: 'vertical',

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
          fontSize: '$1',
        },
        borderRadius: '$1',
        lineHeight: '16px',
        px: '$1',
      },
      '2': {
        '@bp1': {
          fontSize: '$2',
        },
        borderRadius: '$1',
        lineHeight: '20px',
        px: '$1',
      },
      '3': {
        '@bp1': {
          fontSize: '$3',
        },
        borderRadius: '$2',
        lineHeight: '23px',
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
  },
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  width: '100%',
})

export { TextArea }
