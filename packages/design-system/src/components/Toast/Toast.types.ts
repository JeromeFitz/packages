// import type { ToastImplProps } from '@radix-ui/react-toast'
import type { ElementType } from 'react'

type IToastVariant =
  | 'default'
  | 'error'
  | 'generic'
  | 'info'
  | 'loading'
  | 'success'
  | 'warning'

// interface IToast extends ToastImplProps {
interface IToast {
  action?: () => void
  actionAltText?: string
  actionComponent?: ElementType
  actionText?: string
  close?: () => void
  closeComponent?: ElementType
  description: string
  key: string
  title?: string
  variant?: IToastVariant
}

interface IToastContext {
  current?: {
    error: (message: Partial<IToast> | string) => void
    message: (message: Partial<IToast> | string) => void
    messages: IToast[]
    removeToastByKey: (key: string) => void
    success: (message: Partial<IToast> | string) => void
    warning: (message: Partial<IToast> | string) => void
  }
}

export type { IToast, IToastContext, IToastVariant }
