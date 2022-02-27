import {
  Button,
  Toast,
  ToastAction,
  // ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@jeromefitz/design-system/src/components'
// import { styled } from '@jeromefitz/design-system/src/stitches.config'
import * as React from 'react'

import { oneWeekAway, prettyDate } from './Toast.utils'
import { ToastMultiple } from './ToastMultiple'

const ToastDemo = () => {
  const [savedCount, setSavedCount] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)
  const savedRef = React.useRef()

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <ToastProvider swipeDirection="right">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSavedCount((count) => count + 1)
        }}
      >
        <Button css={{ my: '$1' }} ghost variant="blue">
          Multiple
        </Button>
      </form>
      {Array.from({ length: savedCount }).map((_, index) => {
        console.dir(`savedCount: ${savedCount}`)
        console.dir(`index:      ${index}`)
        return (
          <Toast key={`toast-multiple-${index}`}>
            <ToastTitle>Saved!</ToastTitle>
            <ToastDescription>
              {index} ({savedCount})
            </ToastDescription>
          </Toast>
        )
      })}

      <form
        onSubmit={(event) => {
          event.preventDefault()
          savedRef?.current?.publish()
        }}
      >
        <Button css={{ my: '$1' }} ghost variant="blue">
          Duplicate
        </Button>
      </form>

      <ToastMultiple ref={savedRef}>Saved successfully!</ToastMultiple>

      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
        css={{ my: '$1' }}
        ghost
        variant="blue"
      >
        Add to calendar
      </Button>

      <Toast open={open} onOpenChange={setOpen} type="error">
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button css={{ my: '$1' }} ghost variant="blue" size="1">
            Undo
          </Button>
        </ToastAction>
      </Toast>

      <ToastViewport />
    </ToastProvider>
  )
}

export { ToastDemo as Toast }
