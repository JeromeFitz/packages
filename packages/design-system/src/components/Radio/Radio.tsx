/**
 * https://www.radix-ui.com/docs/primitives/components/radio-group
 */
import { forwardRef } from 'react'
import type { ElementRef } from 'react'

import { RadioGroup, StyledIndicator, StyledRadio } from './Radio.styles'
import type { RadioProps } from './Radio.types'

const Radio = forwardRef<ElementRef<typeof StyledRadio>, RadioProps>(
  (props, forwardedRef) => (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledIndicator />
    </StyledRadio>
  )
)

Radio.displayName = 'Radio'

export { Radio, RadioGroup }
