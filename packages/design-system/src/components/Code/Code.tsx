import { styled } from '../../lib/stitches.config'

const Code = styled('code', {
  defaultVariants: {
    // variant: 'gray',
  },
  fontFamily: '$mono',
  fontSize: 'max(12px, 85%)',
  padding: '0 3px 2px 3px',

  variants: {
    variant: {
      // gray: {
      //   backgroundColor: '$slate3',
      //   color: '$slate11',
      // },
    },
  },
  whiteSpace: 'nowrap',
})

export { Code }
