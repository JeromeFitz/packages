/**
 * https://www.radix-ui.com/primitives/docs/components/scroll-area
 */
import { useEffect, useLayoutEffect, useRef } from 'react'

import { Box, Flex } from '../index'

function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
}

const useIsomorphicLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect

type Point = {
  x: number
  y: number
}

type Vector = {
  dx: number
  dy: number
}

type ScrollAreaProps = {
  children: any
}

const ScrollArea = (props: ScrollAreaProps) => {
  const thumbRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const frameUpdateRef = useRef<number>(0)
  const lastDragPos = useRef<Point>({ x: 0, y: 0 })
  const originalBodyPointerEvents = useRef(
    typeof document === 'undefined' ? '' : document.body.style.pointerEvents,
  )

  useIsomorphicLayoutEffect(() => {
    const wrapperEl = wrapperRef.current
    const contentEl = contentRef.current
    const thumbEl = thumbRef.current

    /** The total height of the scrollable content */
    let totalHeight = 0
    /** The visible height of the scrollable content */
    let visibleHeight = 0
    /** The current scrollTop */
    let scrollPos = 0
    /** How far we've scrolled on a scale of 0 to 1 */
    let scrollPosRatio = 0
    /** The ratio of scroll of visible area to total area on a scale of 0 to 1: */
    let visibleToTotalRatio = 0

    /** Keeps the thumb the right size and in the right position */
    function updateThumb() {
      if (contentEl && thumbEl && wrapperEl) {
        // Update our cached values:
        totalHeight = contentEl.scrollHeight
        visibleHeight = contentEl.clientHeight
        scrollPos = contentEl.scrollTop
        // Update calculated values:
        scrollPosRatio = scrollPos / totalHeight
        visibleToTotalRatio = visibleHeight / totalHeight

        if (visibleToTotalRatio >= 1) {
          // We're at 100% visible area, no need to show the scroll thumb:
          thumbEl.style.height = '0px'
        } else {
          // Set the thumb top to the scroll percent:
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          thumbEl.style.top = scrollPosRatio * 100 + '%'
          // Set the thumb size based on the scroll ratio:
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          thumbEl.style.height = Math.max(visibleToTotalRatio * 100, 10) + '%'
        }
      }

      // Keep the updates coming:
      frameUpdateRef.current = requestAnimationFrame(updateThumb)
    }

    /** Caches a starting mouse position, wires up listeners for drag */
    function onDragStart(e: MouseEvent) {
      if (contentEl && thumbEl && wrapperEl) {
        // Prevent default text selection
        e.preventDefault()
        // Grab the starting mouse pos:
        lastDragPos.current = { x: e.clientX, y: e.clientY }
        // Add the dragging class to keep the thumb visible
        wrapperEl.classList.add('modulz-is-dragging')
        // Add event listeners for drag and end:
        window.addEventListener('mousemove', onDragMove)
        window.addEventListener('mouseup', onDragEnd)
        // Remember current body style so overrides can be restored later
        originalBodyPointerEvents.current = document.body.style.pointerEvents
        // Disable pointer events so element hovers aren't visible while dragging
        document.body.style.pointerEvents = 'none'
      }
    }

    /** Calculates the mouse move to scroll amount and applies it */
    function onDragMove(e: MouseEvent) {
      if (contentEl && thumbEl && wrapperEl) {
        // How much did we move?
        const delta: Vector = {
          dx: lastDragPos.current.x - e.clientX,
          dy: lastDragPos.current.y - e.clientY,
        }
        // Cache the new mouse position:
        lastDragPos.current = { x: e.clientX, y: e.clientY }

        // Update the scroll position of the content, amplifying the mouse movement by the amount of content hidden:
        contentEl.scrollTop -= Math.round(delta.dy / visibleToTotalRatio)
      }
    }

    /** Unwires the mouse listeners and pops the dragging class off the wrapper */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onDragEnd(e: MouseEvent) {
      if (contentEl && thumbEl && wrapperEl) {
        // Add the dragging class to keep the thumb visible
        wrapperEl.classList.remove('modulz-is-dragging')
        // Get rid of our drag move and end event listeners:
        window.removeEventListener('mousemove', onDragMove)
        window.removeEventListener('mouseup', onDragEnd)
        // Restore body pointer events style
        document.body.style.pointerEvents = originalBodyPointerEvents.current
      }
    }

    // Listen for mousedown on the thumb:
    thumbRef.current?.addEventListener('mousedown', onDragStart)

    // Start updates every frame:
    frameUpdateRef.current = requestAnimationFrame(updateThumb)

    // Cancel the requestAnimationFrame and unbind potential listeners before leaving
    return () => {
      cancelAnimationFrame(frameUpdateRef.current)
      thumbEl?.removeEventListener('mousedown', onDragStart)
      window.removeEventListener('mousemove', onDragMove)
      window.removeEventListener('mouseup', onDragEnd)
    }
  }, [])

  return (
    <Flex
      css={{
        // This bit shows the thumb when you hover the wrapper
        '&:hover': {
          '& [data-scroll-thumb]': {
            opacity: 1,
          },
        },
        '&.modulz-is-dragging': {
          // But still remove pointer events from content
          '& [data-scroll-content]': {
            pointerEvents: 'none',
          },
          // Need to always keep the thumb visible when scrolling, even if the mouse leaves the wrapper
          '& [data-scroll-thumb]': {
            opacity: 1,
          },
          // Need to keep pointer events when scrolling so thumb isn't hidden immediately after scroll
          pointerEvents: 'auto',
        },
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        maxHeight: '100%',
        minHeight: 0,
        position: 'relative',
      }}
      ref={wrapperRef}
    >
      {/* Lock the content into its own zIndex */}
      <Box
        css={{
          '&::-webkit-scrollbar': { display: 'none' },
          overflow: 'scroll',
          position: 'relative',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          zIndex: 1,
        }}
        data-scroll-content
        ref={contentRef}
      >
        {props.children}
      </Box>
      {/* Create the thumb on a higher zIndex */}
      <Box
        css={{
          // Fill in the thumb color
          '&::after': {
            // Match Radix hue on grays
            backgroundColor: 'hsla(212, 5%, 50%, 0.3)',
            borderRadius: '9999px',
            content: '""',
            height: 'calc(100% - 4px)',
            left: '2px',
            position: 'absolute',
            top: '2px',
            width: 'calc(100% - 4px)',
          },
          opacity: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          width: '8px',
          zIndex: 2,
        }}
        data-scroll-thumb
        ref={thumbRef}
      />
    </Flex>
  )
}

export { ScrollArea }
