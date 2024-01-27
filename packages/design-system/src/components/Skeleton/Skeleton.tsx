import { keyframes, styled } from '../../lib/stitches.config'

const pulse = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: '100%' },
})

const Skeleton = styled('div', {
  '&::after': {
    animationDirection: 'alternate',
    animationDuration: '750ms',
    animationIterationCount: 'infinite',
    animationName: `${pulse}`,
    animationTimingFunction: 'ease-in-out',
    backgroundColor: '$slate6',
    borderRadius: 'inherit',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  backgroundColor: '$slate4',
  defaultVariants: {
    variant: 'text',
  },

  overflow: 'hidden',

  position: 'relative',
  variants: {
    variant: {
      avatar1: {
        borderRadius: '$round',
        height: '$3',
        width: '$3',
      },
      avatar2: {
        borderRadius: '$round',
        height: '$5',
        width: '$5',
      },
      avatar3: {
        borderRadius: '$round',
        height: '$6',
        width: '$6',
      },
      avatar4: {
        borderRadius: '$round',
        height: '$7',
        width: '$7',
      },
      avatar5: {
        borderRadius: '$round',
        height: '$8',
        width: '$8',
      },
      avatar6: {
        borderRadius: '$round',
        height: '$9',
        width: '$9',
      },
      button: {
        borderRadius: '$1',
        height: '$5',
        width: '$8',
      },
      heading: {
        height: '$3',
      },
      text: {
        height: '$1',
      },
      title: {
        height: '$5',
      },
    },
  },
})

export { Skeleton }
