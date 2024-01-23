/**
 * https://www.radix-ui.com/primitives/docs/components/progress
 */
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { forwardRef } from 'react'
import type { ComponentProps, ElementRef } from 'react'

import { styled, keyframes } from '../../lib/stitches.config'
import type { CSS, VariantProps } from '../../lib/stitches.config'

const indeterminateProgress = keyframes({
  '0%': {
    transform: 'scaleX(1) translateX(-100%)',
    transformOrigin: 'left',
  },
  '50%': {
    transform: 'scaleX(1) translateX(1000%)',
    transformOrigin: 'left',
  },
  '100%': {
    transform: 'scaleX(1) translateX(2000%)',
    transformOrigin: 'left',
  },
})

const StyledProgressBar = styled(ProgressPrimitive.Root, {
  boxSizing: 'border-box',
  position: 'relative',
  height: '$1',
  overflow: 'hidden',
  borderRadius: '$pill',

  '&[data-state="indeterminate"]': {
    backgroundColor: '$slate4',
    '&::after': {
      animationName: indeterminateProgress,
      animationDuration: '1500ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      backgroundColor: '$slate7',
      boxSizing: 'border-box',
      borderRadius: '$pill',
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '5%',
    },
  },

  variants: {
    variant: {
      gray: {
        background: '$slate8',
      },
      blue: {
        backgroundColor: '$blue9',
      },
      gradient: {
        backgroundImage:
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      },
    },
  },
  defaultVariants: {
    variant: 'gray',
  },
})

const ProgressBarIndicator = styled(ProgressPrimitive.Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '$slate4',
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
  },
})

type ProgressBarVariants = VariantProps<typeof StyledProgressBar>
type ProgressBarPrimitiveProps = ComponentProps<typeof ProgressPrimitive.Root>
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type ProgressBarProps = ProgressBarPrimitiveProps &
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  ProgressBarVariants & { css?: CSS }

const ProgressBar = forwardRef<
  ElementRef<typeof StyledProgressBar>,
  ProgressBarProps
>(({ value, max = 100, ...props }, forwardedRef) => {
  const percentage = value != null ? Math.round((value / max) * 100) : null

  return (
    <StyledProgressBar {...props} ref={forwardedRef} value={value} max={max}>
      <ProgressBarIndicator style={{ transform: `translateX(${percentage}%)` }} />
    </StyledProgressBar>
  )
})

export { ProgressBar }
