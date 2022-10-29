import { forwardRef } from 'react'
import type { ComponentProps, ElementRef } from 'react'

import { styled } from '../../lib/stitches.config'
import type { CSS } from '../../lib/stitches.config'
import { Icon, Flex } from '../index'

const StyledVerifiedBadge = styled('div', Flex, {
  alignItems: 'center',
  backgroundColor: '$blue9',
  borderRadius: '$round',
  color: 'white',
  flexShrink: 0,
  justifyContent: 'center',
  width: '$3',
  height: '$3',
})

type VerifiedBadgeProps = ComponentProps<typeof StyledVerifiedBadge> & {
  css?: CSS
}

const VerifiedBadge = forwardRef<
  ElementRef<typeof StyledVerifiedBadge>,
  VerifiedBadgeProps
>((props, forwardedRef) => (
  <StyledVerifiedBadge {...props} ref={forwardedRef}>
    <Icon.Check />
  </StyledVerifiedBadge>
))

export { VerifiedBadge }
