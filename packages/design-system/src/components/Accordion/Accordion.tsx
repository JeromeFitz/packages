/**
 * https://www.radix-ui.com/docs/primitives/components/accordion
 */
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { styled, keyframes } from '../../lib/stitches.config'
import { Icon } from '../Icon'

type ForwardedRefType = React.ForwardedRef<any>
type PropsChildren = {
  children?: React.ReactNode
}

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: '100%',
  backgroundColor: '$colors$gray1',
  boxShadow: `0 2px 10px $colors$gray12`,
})

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px $colors$gray12`,
  },
})

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  color: '$colors$gray12',
  boxShadow: `0 1px 0 $colors$gray9`,
  '&[data-state="closed"]': { backgroundColor: '$colors$gray3' },
  '&[data-state="open"]': { backgroundColor: '$colors$gray5' },
  '&:hover': { backgroundColor: '$colors$gray4', cursor: 'pointer' },
})

const StyledContent = styled(AccordionPrimitive.Content, {
  backgroundColor: 'inherit',
  color: '$colors$gray12',
  fontSize: 15,
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

const StyledContentText = styled('div', {
  padding: '$2 $4',
})

const StyledChevron = styled(Icon.ChevronDown, {
  color: '$colors$gray12',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  },
})

const AccordionTrigger = React.forwardRef<ForwardedRefType, PropsChildren>(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <StyledTrigger {...props} ref={forwardedRef}>
        <div>{children}</div>
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  )
)
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<ForwardedRefType, PropsChildren>(
  ({ children, ...props }, forwardedRef) => (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <StyledContent {...props} ref={forwardedRef}>
        <StyledContentText>{children}</StyledContentText>
      </StyledContent>
    </>
  )
)
AccordionContent.displayName = 'AccordionContent'

const Accordion = StyledAccordion
const AccordionItem = StyledItem

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
