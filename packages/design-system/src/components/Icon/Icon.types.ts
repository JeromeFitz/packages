import { SVGAttributes } from 'react'

import { VariantProps } from '../../lib/stitches.config'

import { StyledSVG } from './Icon.styles'

type IconSize = VariantProps<typeof StyledSVG>['size']
type IconVariant = VariantProps<typeof StyledSVG>['variant']

/**
 * ref: https://github.com/radix-ui/icons/blob/master/packages/radix-icons/src/types.tsx
 */
interface IconProps extends SVGAttributes<SVGElement> {
  children?: never
  color?: string
  label?: string
  size?: IconSize
  variant?: IconVariant
}

export type { IconSize, IconVariant, IconProps }
