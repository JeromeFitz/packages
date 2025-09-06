/**
 * https://www.radix-ui.com/primitives/docs/components/radio-group
 */
import type { ElementRef } from 'react'

import type { RadioProps } from './Radio.types'

import { forwardRef } from 'react'

import { RadioGroup, StyledIndicator, StyledRadio } from './Radio.styles'

const Radio = forwardRef<ElementRef<typeof StyledRadio>, RadioProps>(
  (props, forwardedRef) => (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledIndicator />
    </StyledRadio>
  ),
)

Radio.displayName = 'Radio'

export { Radio, RadioGroup }
