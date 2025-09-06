/**
 * https://www.radix-ui.com/primitives/docs/components/progress
 */
import type { ComponentProps, ElementRef } from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import { forwardRef } from 'react'

import { keyframes, styled } from '../../lib/stitches.config'

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
  '&[data-state="indeterminate"]': {
    '&::after': {
      animationDuration: '1500ms',
      animationIterationCount: 'infinite',
      animationName: indeterminateProgress,
      animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      backgroundColor: '$slate7',
      borderRadius: '$pill',
      bottom: 0,
      boxSizing: 'border-box',
      content: '""',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '5%',
    },
    backgroundColor: '$slate4',
  },
  borderRadius: '$pill',
  boxSizing: 'border-box',
  defaultVariants: {
    variant: 'gray',
  },
  height: '$1',

  overflow: 'hidden',

  position: 'relative',
  variants: {
    variant: {
      blue: {
        backgroundColor: '$blue9',
      },
      gradient: {
        backgroundImage:
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      },
      gray: {
        background: '$slate8',
      },
    },
  },
})

const ProgressBarIndicator = styled(ProgressPrimitive.Indicator, {
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
  },
  backgroundColor: '$slate4',
  bottom: 0,
  boxSizing: 'border-box',
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  width: '100%',
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
>(({ max = 100, value, ...props }, forwardedRef) => {
  const percentage = value != null ? Math.round((value / max) * 100) : null

  return (
    <StyledProgressBar {...props} max={max} ref={forwardedRef} value={value}>
      <ProgressBarIndicator style={{ transform: `translateX(${percentage}%)` }} />
    </StyledProgressBar>
  )
})

export { ProgressBar }
