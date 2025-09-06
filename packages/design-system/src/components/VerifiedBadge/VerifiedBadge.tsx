import type { ComponentProps, ElementRef } from 'react'

import type { CSS } from '../../lib/stitches.config'

import { forwardRef } from 'react'

import { styled } from '../../lib/stitches.config'
import { Flex, Icon } from '../index'

const StyledVerifiedBadge = styled('div', Flex, {
  alignItems: 'center',
  backgroundColor: '$blue9',
  borderRadius: '$round',
  color: 'white',
  flexShrink: 0,
  height: '$3',
  justifyContent: 'center',
  width: '$3',
})

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
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
