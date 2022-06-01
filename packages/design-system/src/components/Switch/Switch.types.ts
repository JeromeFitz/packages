import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

import { VariantProps, CSS } from '../../lib/stitches.config'

import { StyledSwitch } from './Switch.styles'

type SwitchVariants = VariantProps<typeof StyledSwitch>
type SwitchPrimitiveProps = React.ComponentProps<typeof SwitchPrimitive.Root>
type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS }

export type { SwitchProps }
