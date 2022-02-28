// import type { ToastImplProps } from '@radix-ui/react-toast'
import * as React from 'react'

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
  actionText?: string
  actionComponent?: React.ElementType
  close?: () => void
  closeComponent?: React.ElementType
  description: string
  key: string
  title?: string
  variant?: IToastVariant
}

interface IToastContext {
  current?: {
    messages: IToast[]
    message: (message: Partial<IToast> | string) => void
    error: (message: Partial<IToast> | string) => void
    success: (message: Partial<IToast> | string) => void
    removeToastByKey: (key: string) => void
    warning: (message: Partial<IToast> | string) => void
  }
}

export type { IToast, IToastVariant, IToastContext }
