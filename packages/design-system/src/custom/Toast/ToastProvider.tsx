import * as React from 'react'

import type { IToastContext, IToast, ToastType } from './Toast.types'

const throwerFn = () => {
  throw new Error('Missing a ToastsProvider')
}

const ToastContext = React.createContext<IToastContext>({
  current: {
    messages: [],
    message: throwerFn,
    error: throwerFn,
    success: throwerFn,
    removeToastByKey: throwerFn,
    warning: throwerFn,
  },
})

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = React.useState<IToast[]>([])

  const handleMessage = (
    toast: Partial<IToast> | string,
    defaultType: ToastType
  ) => {
    let text, preserve, action, cancelAction
    let type = defaultType
    if (typeof toast === 'string') {
      text = toast
    } else {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;({ text, type, preserve, action, cancelAction } = toast)
    }
    setMessages((prev) => [
      ...prev,
      {
        text,
        preserve,
        height: action || cancelAction ? 72 : 64,
        key: (+new Date()).toString(),
        action,
        cancelAction,
        type,
      },
    ])
  }

  const message = (toast: Partial<IToast> | string) => {
    handleMessage(toast, 'default')
  }
  const error = (toast: Partial<IToast> | string) => {
    handleMessage(toast, 'error')
  }
  const success = (toast: Partial<IToast> | string) => {
    handleMessage(toast, 'success')
  }
  const warning = (toast: Partial<IToast> | string) => {
    handleMessage(toast, 'warning')
  }
  const removeToastByKey = (key: string) => {
    setMessages((prev) => prev.filter((p) => p.key !== key))
  }

  return (
    <ToastContext.Provider
      value={{
        current: {
          messages,
          message,
          error,
          success,
          removeToastByKey,
          warning,
        },
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export { ToastContext }
export default ToastProvider
