import * as SwitchPrimitive from '@radix-ui/react-switch'
import type { ComponentProps } from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'

import { StyledSwitch } from './Switch.styles'

type SwitchVariants = VariantProps<typeof StyledSwitch>
type SwitchPrimitiveProps = ComponentProps<typeof SwitchPrimitive.Root>
type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS }

export type { SwitchProps }
