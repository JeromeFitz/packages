import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { keyframes, styled } from '../../lib/stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const StyledContent = styled(TooltipPrimitive.Content, {
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="delayed-open"]': {
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="top"]': { animationName: slideDownAndFade },
    },
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
  },
  backgroundColor: '$hiContrast',
  borderRadius: 4,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  color: '$loContrast',
  fontSize: 15,
  lineHeight: 1,
  padding: '10px 15px',
  userSelect: 'none',
})

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$hiContrast',
})

const Tooltip = TooltipPrimitive.Root
const TooltipArrow = StyledArrow
const TooltipContent = StyledContent
const TooltipPortal = TooltipPrimitive.Portal
const TooltipProvider = TooltipPrimitive.Provider
const TooltipTrigger = TooltipPrimitive.Trigger

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
}
