import {
  Button,
  Toast,
  ToastAction,
  // ToastClose,
  ToastDescription,
  // ToastProvider,
  ToastTitle,
  // ToastViewport,
} from '@jeromefitz/design-system/src/components'
import { Cross2Icon } from '@radix-ui/react-icons'
import React from 'react'

import { prettyDate } from './Toast.utils'

const ToastMultiple = React.forwardRef((props, forwardedRef) => {
  const { children, ...toastProps } = props
  const [count, setCount] = React.useState(0)
  // const eventDateRef = React.useRef(new Date())

  React.useImperativeHandle(forwardedRef, () => ({
    publish: () => setCount((count) => count + 1),
  }))

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Toast key={index} {...toastProps}>
          <ToastTitle>{children}</ToastTitle>
          <ToastDescription>
            <time dateTime={new Date().toISOString()}>{prettyDate(new Date())}</time>
          </ToastDescription>
          <ToastAction asChild altText="Goto schedule to undo">
            <Button ghost size="1">
              <Cross2Icon />
            </Button>
          </ToastAction>
        </Toast>
      ))}
    </>
  )
})
ToastMultiple.displayName = 'ToastMultiple'

export { ToastMultiple as ToastMultiple }
