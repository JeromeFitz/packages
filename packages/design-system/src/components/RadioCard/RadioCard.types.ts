import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'

import type { CSS } from '../../lib/stitches.config'

type RadioGroupItemPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
>
type RadioCardProps = RadioGroupItemPrimitiveProps & { css?: CSS }

export type { RadioCardProps }
