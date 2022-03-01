/**
 * https://www.radix-ui.com/docs/primitives/components/radio-group
 */
import * as React from 'react'

import { RadioGroup, StyledIndicator, StyledRadio } from './Radio.styles'
import type { RadioProps } from './Radio.types'

const Radio = React.forwardRef<React.ElementRef<typeof StyledRadio>, RadioProps>(
  (props, forwardedRef) => (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledIndicator />
    </StyledRadio>
  )
)

Radio.displayName = 'Radio'

export { Radio, RadioGroup }
