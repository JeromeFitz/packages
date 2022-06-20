import { SVGAttributes } from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'

import { StyledSVG } from './Icon.styles'

type IconSize = VariantProps<typeof StyledSVG>['size']
type IconVariant = VariantProps<typeof StyledSVG>['variant']

/**
 * ref: https://github.com/radix-ui/icons/blob/master/packages/radix-icons/src/types.tsx
 */
interface IconProps extends SVGAttributes<SVGElement> {
  children?: never
  css?: CSS
  color?: string
  label?: string
  size?: IconSize
  variant?: IconVariant
}

export type { IconSize, IconVariant, IconProps }
