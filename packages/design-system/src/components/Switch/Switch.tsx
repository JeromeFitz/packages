/**
 * https://www.radix-ui.com/primitives/docs/components/switch
 */
import type { ElementRef } from 'react'

import type { SwitchProps } from './Switch.types'

import { forwardRef } from 'react'

import { StyledSwitch, StyledThumb } from './Switch.styles'

const Switch = forwardRef<ElementRef<typeof StyledSwitch>, SwitchProps>(
  (props, forwardedRef) => (
    <StyledSwitch {...props} ref={forwardedRef}>
      <StyledThumb />
    </StyledSwitch>
  ),
)

Switch.displayName = 'Switch'

export { Switch }
