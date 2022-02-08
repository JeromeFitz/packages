interface ToastContainerProps extends IToast {
  height: number
  heights?: number[]
  hovering: boolean
  id: string
  onMount?: () => void
  position?: number
  preserve?: boolean
  remove?: () => void
  text: string
}

type ToastType =
  | 'default'
  | 'error'
  | 'generic'
  | 'info'
  | 'loading'
  | 'success'
  | 'warning'

interface IToast {
  action?: string
  // actionComponent?: any
  cancelAction?: string
  duration?: number
  height: number
  key: string
  preserve?: boolean
  text: string
  type?: ToastType
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

const ACTIVE_TOAST_LIMIT = 10

// @todo(toast): determine types and timings
const DEFAULT_TIMEOUTS: {
  [key in ToastType]: number
} = {
  default: 10000,
  error: 8000,
  generic: 10000,
  info: 5000,
  loading: 50000,
  success: 5000,
  warning: 8000,
}

enum IToastState {
  Idle = 'idle',
  Timing = 'timing',
  Interacting = 'interacting',
}

// @todo(toast): determine types and timings
const ROLES_BY_TYPE: {
  [key in ToastType]: 'status' | 'alert'
} = {
  default: 'status',
  error: 'alert',
  generic: 'status',
  info: 'status',
  loading: 'status',
  success: 'alert',
  warning: 'alert',
}

// @todo(toast): determine types and timings
const ARIA_LIVE_BY_TYPE: {
  [key in ToastType]: 'assertive' | 'polite'
} = {
  default: 'polite',
  error: 'assertive',
  generic: 'polite',
  info: 'polite',
  loading: 'polite',
  success: 'assertive',
  warning: 'assertive',
}

export type { IToastContext, IToast, ToastContainerProps, IToastState, ToastType }
export { ACTIVE_TOAST_LIMIT, ARIA_LIVE_BY_TYPE, DEFAULT_TIMEOUTS, ROLES_BY_TYPE }
