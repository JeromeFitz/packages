/**
 * https://www.radix-ui.com/docs/primitives/components/switch
 */
import * as React from 'react'

import { StyledThumb, StyledSwitch } from './Switch.styles'
import type { SwitchProps } from './Switch.types'

const Switch = React.forwardRef<React.ElementRef<typeof StyledSwitch>, SwitchProps>(
  (props, forwardedRef) => (
    <StyledSwitch {...props} ref={forwardedRef}>
      <StyledThumb />
    </StyledSwitch>
  )
)

Switch.displayName = 'Switch'

export { Switch }
