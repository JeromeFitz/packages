import { forwardRef, useImperativeHandle, useState } from 'react'

import { Button, Icon } from '../index'

import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from './Toast'
import type { IToast, IToastVariant } from './Toast.types'

const Toaster = forwardRef((props, forwardedRef) => {
  const [toasts, toastsSet] = useState<IToast[]>([])

  const handleToast = (
    toast: Partial<IToast> | string,
    toastVariant: IToastVariant
  ) => {
    // @todo(types) + defaults
    let action,
      actionComponent,
      actionText,
      close,
      closeComponent,
      description,
      title

    let variant = toastVariant

    if (typeof toast === 'string') {
      description = toast
    } else {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;({
        action,
        actionComponent,
        actionText,
        close,
        closeComponent,
        description,
        title,
        variant,
      } = toast)
    }

    toastsSet((prev) => [
      ...prev,
      {
        action,
        actionComponent,
        actionText,
        close,
        closeComponent,
        description,
        key: (+new Date()).toString(),
        title,
        variant,
      },
    ])
  }

  const removeToastByKey = (key: string) => {
    toastsSet((prev) => prev.filter((p) => p.key !== key))
  }

  const createToast = (toast: Partial<IToast> | string) => {
    handleToast(toast, 'default')
  }

  useImperativeHandle(forwardedRef, () => ({
    createToast,
    removeToastByKey,
  }))

  return (
    <>
      {toasts.map(
        ({
          action,
          actionAltText,
          // @todo(toast) custom component
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          actionComponent,
          actionText,
          close,
          // @todo(toast) custom component
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          closeComponent,
          key,
          description,
          title,
          variant,
          ...toastProps
        }) => {
          const actionVisible = !!action && !!actionText
          const closeVisible = !actionVisible && !!close
          return (
            <Toast
              key={key}
              onOpenChange={() => {
                removeToastByKey(key)
              }}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              variant={variant}
              {...toastProps}
            >
              {!!title && (
                <ToastTitle>
                  {title} ({key})
                </ToastTitle>
              )}
              <ToastDescription>{description}</ToastDescription>

              {actionVisible && (
                <ToastAction asChild altText={actionAltText || actionText}>
                  <Button onClick={action} size="1">
                    {actionText}
                  </Button>
                </ToastAction>
              )}

              {closeVisible && (
                <ToastClose asChild aria-label="Close">
                  <Button ghost size="1" onClick={!!close ? close : () => {}}>
                    <Icon.Cross2 />
                  </Button>
                </ToastClose>
              )}
            </Toast>
          )
        }
      )}
    </>
  )
})
Toaster.displayName = 'Toaster'

export { Toaster }
