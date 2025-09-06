import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import type { ComponentProps } from 'react'

import type { CSS } from '../../lib/stitches.config'

type RadioGroupItemPrimitiveProps = ComponentProps<typeof RadioGroupPrimitive.Item>
type RadioCardProps = RadioGroupItemPrimitiveProps & { css?: CSS }

export type { RadioCardProps }
