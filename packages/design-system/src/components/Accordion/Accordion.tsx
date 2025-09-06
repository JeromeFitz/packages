/**
 * https://www.radix-ui.com/primitives/docs/components/accordion
 */
import type { ForwardedRef, ReactNode } from 'react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { forwardRef } from 'react'

import { keyframes, styled } from '../../lib/stitches.config'
import { Icon } from '../Icon'

type ForwardedRefType = ForwardedRef<any>
type PropsChildren = {
  children?: ReactNode
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
  backgroundColor: '$colors$gray1',
  borderRadius: 6,
  boxShadow: `0 2px 10px $colors$gray12`,
  width: '100%',
})

const StyledItem = styled(AccordionPrimitive.Item, {
  '&:first-child': {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginTop: 0,
  },
  '&:focus-within': {
    boxShadow: `0 0 0 2px $colors$gray12`,
    position: 'relative',
    zIndex: 1,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  marginTop: 1,

  overflow: 'hidden',
})

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  '&:hover': { backgroundColor: '$colors$gray4', cursor: 'pointer' },
  '&[data-state="closed"]': { backgroundColor: '$colors$gray3' },
  '&[data-state="open"]': { backgroundColor: '$colors$gray5' },
  alignItems: 'center',
  all: 'unset',
  backgroundColor: 'transparent',
  boxShadow: `0 1px 0 $colors$gray9`,
  color: '$colors$gray12',
  display: 'flex',
  flex: 1,
  fontFamily: 'inherit',
  fontSize: 15,
  height: 45,
  justifyContent: 'space-between',
  lineHeight: 1,
  padding: '0 20px',
})

const StyledContent = styled(AccordionPrimitive.Content, {
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  backgroundColor: 'inherit',
  color: '$colors$gray12',

  fontSize: 15,
  overflow: 'hidden',
})

const StyledContentText = styled('div', {
  padding: '$2 $4',
})

const StyledChevron = styled(Icon.ChevronDown, {
  '[data-state=open] &': { transform: 'rotate(180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  },
  color: '$colors$gray12',
})

const AccordionTrigger = forwardRef<ForwardedRefType, PropsChildren>(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <StyledTrigger {...props} ref={forwardedRef}>
        <div>{children}</div>
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  ),
)
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = forwardRef<ForwardedRefType, PropsChildren>(
  ({ children, ...props }, forwardedRef) => (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <StyledContent {...props} ref={forwardedRef}>
        <StyledContentText>{children}</StyledContentText>
      </StyledContent>
    </>
  ),
)
AccordionContent.displayName = 'AccordionContent'

const Accordion = StyledAccordion
const AccordionItem = StyledItem

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
