/**
 * https://www.radix-ui.com/primitives/docs/components/switch
 */
import { forwardRef } from 'react'
import type { ElementRef } from 'react'

import { StyledThumb, StyledSwitch } from './Switch.styles'
import type { SwitchProps } from './Switch.types'

const Switch = forwardRef<ElementRef<typeof StyledSwitch>, SwitchProps>(
  (props, forwardedRef) => (
    <StyledSwitch {...props} ref={forwardedRef}>
      <StyledThumb />
    </StyledSwitch>
  ),
)

Switch.displayName = 'Switch'

export { Switch }
