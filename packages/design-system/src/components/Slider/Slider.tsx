/**
 * https://www.radix-ui.com/primitives/docs/components/slider
 */
import type { ComponentProps, ElementRef } from 'react'

import type { CSS } from '../../lib/stitches.config'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { forwardRef } from 'react'

import { styled } from '../../lib/stitches.config'

const SliderTrack = styled(SliderPrimitive.Track, {
  '&[data-orientation="horizontal"]': {
    height: 2,
  },
  '&[data-orientation="vertical"]': {
    height: 100,
    width: 2,
  },
  backgroundColor: '$slate7',
  borderRadius: '$pill',
  flexGrow: 1,
  position: 'relative',
})

const SliderRange = styled(SliderPrimitive.Range, {
  '&[data-orientation="horizontal"]': {
    height: '100%',
  },
  '&[data-orientation="vertical"]': {
    width: '100%',
  },
  background: '$blue9',
  borderRadius: 'inherit',
  position: 'absolute',
})

const SliderThumb = styled(SliderPrimitive.Thumb, {
  '&::after': {
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1)',
    },
    backgroundColor: 'hsla(0,0%,0%,.035)',
    borderRadius: '$round',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'scale(1)',
    zIndex: -2,
  },
  '&:focus': {
    '&::after': {
      transform: 'scale(2)',
    },
  },
  backgroundColor: 'white',
  borderRadius: '$round',
  boxShadow: '0 0 1px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.15)',
  display: 'block',
  height: 15,
  opacity: '0',
  outline: 'none',

  position: 'relative',

  width: 15,
})

const StyledSlider = styled(SliderPrimitive.Root, {
  '@hover': {
    '&:hover': {
      [`& ${SliderThumb}`]: {
        opacity: '1',
      },
      [`& ${SliderTrack}`]: {
        backgroundColor: '$slate8',
      },
    },
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 15,
  },
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  flexShrink: 0,
  height: 15,
  position: 'relative',

  touchAction: 'none',

  userSelect: 'none',
})

type SliderPrimitiveProps = ComponentProps<typeof SliderPrimitive.Root>
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type SliderProps = SliderPrimitiveProps & { css?: CSS }

const Slider = forwardRef<ElementRef<typeof StyledSlider>, SliderProps>(
  (props, forwardedRef) => {
    const hasRange = Array.isArray(props.defaultValue || props.value)
    const thumbsArray = hasRange
      ? props.defaultValue || props.value
      : [props.defaultValue || props.value]

    return (
      <StyledSlider {...props} ref={forwardedRef}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {thumbsArray.map((_: any, i: number) => (
          <SliderThumb key={i} />
        ))}
      </StyledSlider>
    )
  },
)

export { Slider, StyledSlider }
