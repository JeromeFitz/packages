/**
 * @hack more blatant fork'ing from `radix-ui` this time from:
 * @ref  https://github.com/radix-ui/website
 *
 */
import type { ElementRef, RefObject } from 'react'

import { composeEventHandlers } from '@radix-ui/primitive'
import { useComposedRefs } from '@radix-ui/react-compose-refs'
import { createContext } from '@radix-ui/react-context'
import { useCallbackRef } from '@radix-ui/react-use-callback-ref'
import debounce from 'lodash/debounce'
import { useCallback, useEffect, useRef, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import { styled } from '../../lib/stitches.config'
import { Box } from '../index'

const [CarouselProvider, useCarouselContext] = createContext<{
  _: any
  nextDisabled: boolean
  onNextClick(): void
  onPrevClick(): void
  prevDisabled: boolean
  slideListRef: RefObject<HTMLElement>
}>('Carousel')

const Carousel = (props) => {
  const ref = useRef<ElementRef<typeof Box>>(null)
  const { children, ...carouselProps } = props
  const slideListRef = useRef<HTMLElement>(null)
  const [_, force] = useState({})
  const [nextDisabled, setNextDisabled] = useState(false)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const navigationUpdateDelay = useRef(100)
  useEffect(() => smoothscroll.polyfill(), [])

  const getSlideInDirection = useCallbackRef((direction: -1 | 1) => {
    // @todo(any)
    const slides: any = ref.current?.querySelectorAll<HTMLElement>(
      '[data-slide-intersection-ratio]',
    )
    if (slides) {
      // @todo(any)
      const slidesArray: any = Array.from(slides.values())

      if (direction === 1) {
        slidesArray.reverse()
      }
      return slidesArray.find(
        // @todo(any)
        (slide: any) => slide.dataset.slideIntersectionRatio !== '0',
      )
    }
  })

  const handleNextClick = useCallback(() => {
    // @todo(any)
    const nextSlide: any = getSlideInDirection(1)
    if (nextSlide) {
      const { clientWidth, scrollLeft, scrollWidth } = slideListRef.current
      const itemWidth = nextSlide.clientWidth
      const itemsToScroll =
        itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1
      const nextPos =
        Math.floor(scrollLeft / itemWidth) * itemWidth + itemWidth * itemsToScroll
      slideListRef.current.scrollTo({ behavior: 'smooth', left: nextPos })

      // Disable previous & next buttons immediately
      setPrevDisabled(nextPos <= 0)
      setNextDisabled(scrollWidth - nextPos - clientWidth <= 0)
      // Wait for scroll animation to finish before the buttons *might* show up again
      navigationUpdateDelay.current = 500
    }
  }, [getSlideInDirection, setPrevDisabled])

  const handlePrevClick = useCallback(() => {
    // @todo(any)
    const prevSlide: any = getSlideInDirection(-1)
    if (prevSlide) {
      const { clientWidth, scrollLeft, scrollWidth } = slideListRef.current
      const itemWidth = prevSlide.clientWidth
      const itemsToScroll =
        itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1
      const nextPos =
        Math.ceil(scrollLeft / itemWidth) * itemWidth - itemWidth * itemsToScroll
      slideListRef.current.scrollTo({ behavior: 'smooth', left: nextPos })

      // Disable previous & next buttons immediately
      setPrevDisabled(nextPos <= 0)
      setNextDisabled(scrollWidth - nextPos - clientWidth <= 0)
      // Wait for scroll animation to finish before the buttons *might* show up again
      navigationUpdateDelay.current = 500
    }
  }, [getSlideInDirection, setPrevDisabled])

  useEffect(() => {
    // Keep checking for whether we need to disable the navigation buttons, debounced
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      requestAnimationFrame(() => {
        if (slideListRef.current) {
          const { clientWidth, scrollLeft, scrollWidth } = slideListRef.current
          setPrevDisabled(scrollLeft <= 0)
          setNextDisabled(scrollWidth - scrollLeft - clientWidth <= 0)
          navigationUpdateDelay.current = 100
        }
      })
    }, navigationUpdateDelay.current)
  })

  useEffect(() => {
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
      onNextClick={handleNextClick}
      onPrevClick={handlePrevClick}
      prevDisabled={prevDisabled}
      slideListRef={slideListRef}
    >
      <Box {...carouselProps} ref={ref}>
        {children}
      </Box>
    </CarouselProvider>
  )
}

const CarouselSlideList = (props) => {
  const context = useCarouselContext('CarouselSlideList')
  const ref = useRef<ElementRef<typeof Box>>(null)
  const composedRefs = useComposedRefs(ref, context.slideListRef)
  const [dragStart, setDragStart] = useState(null)

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
      data-state={dragStart ? 'dragging' : undefined}
      onMouseDownCapture={composeEventHandlers(
        props.onMouseDownCapture,
        (event: MouseEvent) => {
          // Drag only if main mouse button was clicked
          if (event.button === 0) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
            setDragStart({
              pointerX: event.clientX,
              scrollX: (event.currentTarget as HTMLElement).scrollLeft,
            })
          }
        },
      )}
      onPointerDown={composeEventHandlers(
        props.onPointerDown,
        (event: PointerEvent) => {
          const element = event.target as HTMLElement
          element.style.userSelect = 'none'
          element.setPointerCapture(event.pointerId)
        },
      )}
      onPointerUp={composeEventHandlers(props.onPointerUp, (event: PointerEvent) => {
        const element = event.target as HTMLElement
        element.style.userSelect = ''
        element.releasePointerCapture(event.pointerId)
      })}
      ref={composedRefs}
    />
  )
}

const CarouselSlide = (props) => {
  const { as: Comp = Box, ...slideProps } = props
  const context = useCarouselContext('CarouselSlide')
  const ref = useRef<ElementRef<typeof Box>>(null)
  const [intersectionRatio, setIntersectionRatio] = useState(0)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersectionRatio(entry.intersectionRatio),
      { root: context.slideListRef.current, threshold: [0, 0.5, 1] },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [context.slideListRef])

  return (
    <Comp
      {...slideProps}
      data-slide-intersection-ratio={intersectionRatio}
      onClick={(event) => {
        if (isDraggingRef.current) {
          event.preventDefault()
        }
      }}
      onDragStart={(event) => {
        event.preventDefault()
        isDraggingRef.current = true
      }}
      ref={ref}
    />
  )
}

const CarouselNext = (props) => {
  const { as: Comp = 'button', ...nextProps } = props
  const context = useCarouselContext('CarouselNext')
  return (
    <Comp
      {...nextProps}
      disabled={context.nextDisabled}
      onClick={() => context.onNextClick()}
    />
  )
}

const CarouselPrevious = (props) => {
  const { as: Comp = 'button', ...prevProps } = props
  const context = useCarouselContext('CarouselPrevious')
  return (
    <Comp
      {...prevProps}
      disabled={context.prevDisabled}
      onClick={() => context.onPrevClick()}
    />
  )
}

const CarouselArrowButton = styled('button', {
  '@hover': {
    '&:hover': {
      // Fix a bug when hovering at button edges would cause the button to jitter because of transform
      '&::before': {
        br: '$round',
        content: '',
        inset: -2,
        position: 'absolute',
      },
      boxShadow: '$colors$blackA10 0px 3px 16px -5px, $colors$blackA5 0px 1px 3px',

      transform: 'translateY(-1px)',
    },
  },
  '@media (hover: none) and (pointer: coarse)': {
    display: 'none',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 100ms',
  },
  '&:active': {
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'opacity 100ms',
    },
    transform: 'none',
  },
  '&:active:not(:focus)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  },
  '&:disabled': {
    opacity: 0,
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
  ai: 'center',
  bc: '$panel',
  border: 0,
  boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  br: '$round',
  color: '$hiContrast',
  display: 'flex',

  height: '$7',
  jc: 'center',

  margin: 0,

  outline: 0,
  padding: 0,
  position: 'relative',
  unset: 'all',
  width: '$7',
  willChange: 'transform, box-shadow, opacity',
  zIndex: 1,
})

export {
  Carousel,
  CarouselArrowButton,
  CarouselNext,
  CarouselPrevious,
  CarouselSlide,
  CarouselSlideList,
}
