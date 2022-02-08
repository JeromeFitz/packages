import { CSS } from '@ds/stitches.config'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'

type RadioGroupItemPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
>
type RadioCardProps = RadioGroupItemPrimitiveProps & { css?: CSS }

export type { RadioCardProps }
