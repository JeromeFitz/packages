/**
 * @hack more blatant fork'ing from `radix-ui` this time from:
 * @ref  https://github.com/radix-ui/website
 *
 */
import { composeEventHandlers } from '@radix-ui/primitive'
import { useComposedRefs } from '@radix-ui/react-compose-refs'
import { createContext } from '@radix-ui/react-context'
import { useCallbackRef } from '@radix-ui/react-use-callback-ref'
import debounce from 'lodash/debounce'
import * as React from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import { styled } from '../../stitches.config'
import { Box } from '../index'

const [CarouselProvider, useCarouselContext] = createContext<{
  _: any
  slideListRef: React.RefObject<HTMLElement>
  onNextClick(): void
  onPrevClick(): void
  nextDisabled: boolean
  prevDisabled: boolean
}>('Carousel')

const Carousel = (props) => {
  const ref = React.useRef<React.ElementRef<typeof Box>>(null)
  const { children, ...carouselProps } = props
  const slideListRef = React.useRef<HTMLElement>(null)
  const [_, force] = React.useState({})
  const [nextDisabled, setNextDisabled] = React.useState(false)
  const [prevDisabled, setPrevDisabled] = React.useState(true)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>()
  const navigationUpdateDelay = React.useRef(100)
  React.useEffect(() => smoothscroll.polyfill(), [])

  const getSlideInDirection = useCallbackRef((direction: 1 | -1) => {
    // @todo(any)
    const slides: any = ref.current?.querySelectorAll<HTMLElement>(
      '[data-slide-intersection-ratio]'
    )
    if (slides) {
      // @todo(any)
      const slidesArray: any = Array.from(slides.values())

      if (direction === 1) {
        slidesArray.reverse()
      }
      return slidesArray.find(
        // @todo(any)
        (slide: any) => slide.dataset.slideIntersectionRatio !== '0'
      )
    }
  })

  const handleNextClick = React.useCallback(() => {
    // @todo(any)
    const nextSlide: any = getSlideInDirection(1)
    if (nextSlide) {
      const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current
      const itemWidth = nextSlide.clientWidth
      const itemsToScroll =
        itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1
      const nextPos =
        Math.floor(scrollLeft / itemWidth) * itemWidth + itemWidth * itemsToScroll
      slideListRef.current.scrollTo({ left: nextPos, behavior: 'smooth' })

      // Disable previous & next buttons immediately
      setPrevDisabled(nextPos <= 0)
      setNextDisabled(scrollWidth - nextPos - clientWidth <= 0)
      // Wait for scroll animation to finish before the buttons *might* show up again
      navigationUpdateDelay.current = 500
    }
  }, [getSlideInDirection, setPrevDisabled])

  const handlePrevClick = React.useCallback(() => {
    // @todo(any)
    const prevSlide: any = getSlideInDirection(-1)
    if (prevSlide) {
      const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current
      const itemWidth = prevSlide.clientWidth
      const itemsToScroll =
        itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1
      const nextPos =
        Math.ceil(scrollLeft / itemWidth) * itemWidth - itemWidth * itemsToScroll
      slideListRef.current.scrollTo({ left: nextPos, behavior: 'smooth' })

      // Disable previous & next buttons immediately
      setPrevDisabled(nextPos <= 0)
      setNextDisabled(scrollWidth - nextPos - clientWidth <= 0)
      // Wait for scroll animation to finish before the buttons *might* show up again
      navigationUpdateDelay.current = 500
    }
  }, [getSlideInDirection, setPrevDisabled])

  React.useEffect(() => {
    // Keep checking for whether we need to disable the navigation buttons, debounced
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      requestAnimationFrame(() => {
        if (slideListRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current
          setPrevDisabled(scrollLeft <= 0)
          setNextDisabled(scrollWidth - scrollLeft - clientWidth <= 0)
          navigationUpdateDelay.current = 100
        }
      })
    }, navigationUpdateDelay.current)
  })

  React.useEffect(() => {
    const slidesList = slideListRef.current
    if (slidesList) {
      const handleScrollStartAndEnd = debounce(() => force({}), 100, {
        leading: true,
        trailing: true,
      })
      slidesList.addEventListener('scroll', handleScrollStartAndEnd)
      window.addEventListener('resize', handleScrollStartAndEnd)
      force({})
      return () => {
        slidesList.removeEventListener('scroll', handleScrollStartAndEnd)
        window.removeEventListener('resize', handleScrollStartAndEnd)
      }
    }
    return () => {}
  }, [slideListRef])

  return (
    <CarouselProvider
      _={_}
      nextDisabled={nextDisabled}
      prevDisabled={prevDisabled}
      slideListRef={slideListRef}
      onNextClick={handleNextClick}
      onPrevClick={handlePrevClick}
    >
      <Box {...carouselProps} ref={ref}>
        {children}
      </Box>
    </CarouselProvider>
  )
}

const CarouselSlideList = (props) => {
  const context = useCarouselContext('CarouselSlideList')
  const ref = React.useRef<React.ElementRef<typeof Box>>(null)
  const composedRefs = useComposedRefs(ref, context.slideListRef)
  const [dragStart, setDragStart] = React.useState(null)

  const handleMouseMove = useCallbackRef((event) => {
    if (ref.current) {
      const distanceX = event.clientX - dragStart.pointerX
      ref.current.scrollLeft = dragStart.scrollX - distanceX
    }
  })

  const handleMouseUp = useCallbackRef(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    setDragStart(null)
  })

  return (
    <Box
      {...props}
      ref={composedRefs}
      data-state={dragStart ? 'dragging' : undefined}
      onMouseDownCapture={composeEventHandlers(
        props.onMouseDownCapture,
        (event: MouseEvent) => {
          // Drag only if main mouse button was clicked
          if (event.button === 0) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
            setDragStart({
              scrollX: (event.currentTarget as HTMLElement).scrollLeft,
              pointerX: event.clientX,
            })
          }
        }
      )}
      onPointerDown={composeEventHandlers(
        props.onPointerDown,
        (event: PointerEvent) => {
          const element = event.target as HTMLElement
          element.style.userSelect = 'none'
          element.setPointerCapture(event.pointerId)
        }
      )}
      onPointerUp={composeEventHandlers(props.onPointerUp, (event: PointerEvent) => {
        const element = event.target as HTMLElement
        element.style.userSelect = ''
        element.releasePointerCapture(event.pointerId)
      })}
    />
  )
}

const CarouselSlide = (props) => {
  const { as: Comp = Box, ...slideProps } = props
  const context = useCarouselContext('CarouselSlide')
  const ref = React.useRef<React.ElementRef<typeof Box>>(null)
  const [intersectionRatio, setIntersectionRatio] = React.useState(0)
  const isDraggingRef = React.useRef(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersectionRatio(entry.intersectionRatio),
      { root: context.slideListRef.current, threshold: [0, 0.5, 1] }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [context.slideListRef])

  return (
    <Comp
      {...slideProps}
      ref={ref}
      data-slide-intersection-ratio={intersectionRatio}
      onDragStart={(event) => {
        event.preventDefault()
        isDraggingRef.current = true
      }}
      onClick={(event) => {
        if (isDraggingRef.current) {
          event.preventDefault()
        }
      }}
    />
  )
}

const CarouselNext = (props) => {
  const { as: Comp = 'button', ...nextProps } = props
  const context = useCarouselContext('CarouselNext')
  return (
    <Comp
      {...nextProps}
      onClick={() => context.onNextClick()}
      disabled={context.nextDisabled}
    />
  )
}

const CarouselPrevious = (props) => {
  const { as: Comp = 'button', ...prevProps } = props
  const context = useCarouselContext('CarouselPrevious')
  return (
    <Comp
      {...prevProps}
      onClick={() => context.onPrevClick()}
      disabled={context.prevDisabled}
    />
  )
}

const CarouselArrowButton = styled('button', {
  unset: 'all',
  outline: 0,
  margin: 0,
  border: 0,
  padding: 0,

  display: 'flex',
  position: 'relative',
  zIndex: 1,
  ai: 'center',
  jc: 'center',
  bc: '$panel',
  br: '$round',
  width: '$7',
  height: '$7',
  color: '$hiContrast',

  boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  willChange: 'transform, box-shadow, opacity',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 100ms',
  },

  '@hover': {
    '&:hover': {
      boxShadow: '$colors$blackA10 0px 3px 16px -5px, $colors$blackA5 0px 1px 3px',
      transform: 'translateY(-1px)',

      // Fix a bug when hovering at button edges would cause the button to jitter because of transform
      '&::before': {
        content: '',
        inset: -2,
        br: '$round',
        position: 'absolute',
      },
    },
  },
  '&:focus': {
    boxShadow: `
      $colors$blackA10 0px 3px 16px -5px,
      $colors$blackA5 0px 1px 3px,
      $colors$blue8 0 0 0 2px
    `,
    transform: 'translateY(-1px)',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  },
  '&:active:not(:focus)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  },
  '&:active': {
    transform: 'none',
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'opacity 100ms',
    },
  },
  '&:disabled': {
    opacity: 0,
  },
  '@media (hover: none) and (pointer: coarse)': {
    display: 'none',
  },
})

export {
  Carousel,
  CarouselArrowButton,
  CarouselSlideList,
  CarouselSlide,
  CarouselNext,
  CarouselPrevious,
}
