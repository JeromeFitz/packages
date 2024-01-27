import type { ComponentProps } from 'react'

import { useComposedRefs } from '@radix-ui/react-compose-refs'
import { forwardRef, useRef } from 'react'

import { styled } from '../../lib/stitches.config'

const StyledFocusArea = styled('div', {
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$blue8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
  borderRadius: '$3',
  outline: 0,
})

const FocusArea = forwardRef<HTMLDivElement, ComponentProps<typeof StyledFocusArea>>(
  ({ children, onKeyDown, ...props }, forwardedRef) => {
    const ownRef = useRef<HTMLDivElement>(null)
    const composedRef = useComposedRefs(ownRef, forwardedRef)

    /**
     * @refactor
     * If you have more than one slider on a page
     *  need to differentiate for tab control.
     *
     * This needs to be refactored so it can be dynamic
     *  and then shared if possible.
     */
    const entryProps = {
      [props['data-focus-area-type'] === 'top-artists'
        ? 'data-focus-area-top-artists-entry'
        : 'data-focus-area-top-tracks-entry']: true,
    }
    const exitProps = {
      [props['data-focus-area-type'] === 'top-artists'
        ? 'data-focus-area-top-artists-exit'
        : 'data-focus-area-top-tracks-exit']: true,
    }

    return (
      <StyledFocusArea
        {...props}
        data-focus-area
        onKeyDown={(event) => {
          onKeyDown?.(event)

          // Move focus inside the FocusArea when Enter or Spacebar is pressed
          if (
            event.target === event.currentTarget &&
            (event.key === 'Enter' || event.key === ' ')
          ) {
            // We are looking for something obviously focusable
            const tier1 =
              '[role="menu"], [role="dialog"] input, [role="dialog"] button, [tabindex="0"]'
            const tier2 = 'a, button, input, select, textarea'
            // const tier3 = 'div.afc'

            // Search for tier 1 and tier 2 elements, prioritising
            const elementToFocus: any = [
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              event?.currentTarget.querySelector<HTMLElement>(tier1),
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              event?.currentTarget.querySelector<HTMLElement>(tier2),
              // event.currentTarget.querySelector<HTMLElement>(tier3),
            ].filter((el) => Boolean(el))[0]

            if (elementToFocus) {
              event.preventDefault()
              elementToFocus.focus()
            }
          }

          // Move focus onto the FocusArea when Escape is pressed, unless the focus is currently inside a modal
          if (
            event.key === 'Escape' &&
            event.target instanceof HTMLElement &&
            event.target !== event.currentTarget &&
            event.target.closest('[role="dialog"], [role="menu"]') === null
          ) {
            event.currentTarget.focus()
          }
        }}
        ref={composedRef}
        tabIndex={0}
      >
        <div data-focus-area-entry {...entryProps} />
        {children}
        <div data-focus-area-exit {...exitProps} />
      </StyledFocusArea>
    )
  },
)

FocusArea.displayName = 'FocusArea'

export { FocusArea }
