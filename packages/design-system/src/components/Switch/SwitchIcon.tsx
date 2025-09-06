/**
 * https://www.radix-ui.com/primitives/docs/components/switch
 */
import type { ElementRef, ReactNode } from 'react'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import { forwardRef, useMemo } from 'react'

import { darkTheme, styled } from '../../lib/stitches.config'

// import { styled } from '../../lib/stitches.config'

import type { SwitchProps } from './Switch.types'

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  },
  '&[data-state="checked"]': {
    transform: 'translateX(11px)',
  },
  [`.${darkTheme} &`]: {
    boxShadow: `0 2px 10px $colors$shadowLight`,
  },
  backgroundColor: '$loContrast',
  borderRadius: '$pill',
  boxShadow: `0 2px 10px $colors$shadowDark`,
  display: 'block',
  height: '$6',

  transform: 'translateX(-2px) ',
  transition: 'transform 100ms',

  width: '$space$5',
  willChange: 'transform',
})

const StyledSwitchIcon = styled('span', {
  '@motion': {
    transition: 'none',
  },
  '& svg': {
    background: 'transparent',
    color: '$hiContrast',
  },

  alignContent: 'center',
  alignItems: 'center',
  borderRadius: '$pill',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',

  transition: 'transform 100ms',
  width: '100%',
})

const StyledSwitch = styled(SwitchPrimitive.Root, {
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&:focus': {
    boxShadow: '0 2px 10px $colors$shadow',
  },
  '&[data-state="checked"]': {
    '&:focus': {
      boxShadow: '0 2px 10px $colors$shadow',
    },
  },
  all: 'unset',
  backgroundColor: '$hiContrast',
  borderRadius: '$pill',

  boxShadow: `0 2px 10px $hiContrast`,
  boxSizing: 'border-box',
  cursor: 'pointer',

  defaultVariants: {
    size: '2',
  },
  // [`.${darkTheme} &`]: {
  //   boxShadow: `0 2px 10px $loContrast`,
  // },

  margin: '0',
  outline: 'none',
  position: 'relative',

  userSelect: 'none',
  variants: {
    size: {
      '1': {
        height: '$4',
        width: '$6',
      },
      '2': {
        [`& ${StyledThumb}`]: {
          '&[data-state="checked"]': {
            transform: 'translateX(22px)',
          },
          height: 21,
          transform: 'translateX(2px)',
          width: 21,
        },
        height: '$5',
        width: '$8',
      },
      '3': {
        [`& ${StyledThumb}`]: {
          '&[data-state="checked"]': {
            transform: 'translateX(8px) translateY(-4px)',
          },
          height: 26,
          transform: 'translateX(-6px) translateY(-4px)',
          width: 26,
        },
        height: 18,
        transform: 'translateX(2px)',
        width: 30,
      },
      '4': {
        [`& ${StyledThumb}`]: {
          '&[data-state="checked"]': {
            transform: 'translateX(15px) translateY(-4px)',
          },
          height: 32,
          transform: 'translateX(-12px) translateY(-4px)',
          width: 32,
        },
        height: 24,
        transform: 'translateX(2px)',
        width: 36,
      },
    },
  },
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
})

interface SwitchIconProps extends SwitchProps {
  icon?: ReactNode
  iconOff?: ReactNode
  iconOn?: ReactNode
}

const SwitchIcon = forwardRef<ElementRef<typeof StyledSwitch>, SwitchIconProps>(
  ({ checked, icon, iconOff, iconOn, ...props }, forwardedRef) => {
    const iconSwitch = useMemo(() => {
      const hasIcon = icon || iconOn || iconOff
      const hasIconOn = Boolean(iconOn)
      const hasIconOff = Boolean(iconOff)

      if (!hasIcon) return null
      if (hasIconOn && checked) return iconOn
      if (hasIconOff && !checked) return iconOff
      return hasIcon
    }, [checked, icon, iconOff, iconOn])

    return (
      <StyledSwitch checked={checked} {...props} ref={forwardedRef}>
        <StyledThumb>
          <StyledSwitchIcon>{iconSwitch}</StyledSwitchIcon>
        </StyledThumb>
      </StyledSwitch>
    )
  },
)

SwitchIcon.displayName = 'SwitchIcon'

export { SwitchIcon }
