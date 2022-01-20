/**
 * @ref https://github.com/radix-ui/primitives/pull/401
 *
 * This is an add-on to the POC
 * Seeing about using `react-hot-toast` as well which
 *  is why both are present at the moment
 */

import * as Portal from '@radix-ui/react-portal'
import { composeEventHandlers } from '@radix-ui/react-utils'
import _filter from 'lodash/filter'
import * as React from 'react'
import { Toaster as HotToaster } from 'react-hot-toast'

import { ToastContainer } from './ToastContainer'

const ACTIVE_TOAST_LIMIT = 10

// @todo(toast): determine types and timings
const DEFAULT_TIMEOUTS: {
  [key in ToastType]: number
} = {
  error: 8000,
  // generic: 5000,
  info: 5000,
  // loading: 50000, // ?
  success: 5000,
  warning: 8000,
}

enum ToastEventType {
  AddToast,
  DismissToast,
  RemoveToast,
  InteractWithToast,
  StopInteractingWithToast,
}

enum ToastState {
  Idle = 'idle',
  Timing = 'timing',
  Interacting = 'interacting',
}

// @todo(toast): determine types and timings
const ROLES_BY_TYPE: {
  [key in ToastType]: 'status' | 'alert'
} = {
  error: 'alert',
  // generic: 'status',
  info: 'status',
  // loading: 'status',
  success: 'alert',
  warning: 'alert',
}

// @todo(toast): determine types and timings
const ARIA_LIVE_BY_TYPE: {
  [key in ToastType]: 'assertive' | 'polite'
} = {
  error: 'assertive',
  // generic: 'polite',
  info: 'polite',
  // loading: 'polite',
  success: 'assertive',
  warning: 'assertive',
}

/**
 * @toast root level context
 */
const initialToastState: ToastContextValue = {
  state: ToastState.Idle,
  context: {
    toasts: [],
    pausedAt: undefined,
  },
}

const ToastContext = React.createContext<ToastContextValue>(initialToastState)
ToastContext.displayName = 'ToastContext'
function useToastContext() {
  return React.useContext(ToastContext)
}

const ToastDispatchContext = React.createContext<ToastDispatchContextValue>({
  addToast() {},
  removeToast() {},
  dismissToast() {},
  interact() {},
  stopInteracting() {},
})
ToastDispatchContext.displayName = 'ToastDispatchContext'
function useToastDispatchers() {
  return React.useContext(ToastDispatchContext)
}

// const ToastItemAction = styled('div', {})

/**
 * @toast ToastProvider
 */

const Toaster = ({ toasts }) => {
  const _toasts = _filter(toasts, { active: true }).reverse()
  const count = _toasts.length ?? 0
  if (count === 0) {
    return null
  }
  return (
    <Portal.Root>
      {count > 0 ? <ToastContainer toasts={_toasts} /> : null}
    </Portal.Root>
  )
}

const ToastProvider: React.FC = function ToastProvider({ children }) {
  const [{ state, context }, dispatchers] = useToastWarmer()
  return (
    <ToastDispatchContext.Provider value={dispatchers}>
      <ToastContext.Provider value={{ state, context }}>
        {children}
        <Toaster toasts={context?.toasts} />
        <HotToaster />
      </ToastContext.Provider>
    </ToastDispatchContext.Provider>
  )
}

/**
 * @toast ToastCenter
 */

interface ToastCenterOwnProps {
  children(props: { allToasts: ToastData[] }): React.ReactNode
}
type ToastCenterProps = ToastCenterOwnProps &
  Omit<React.ComponentPropsWithRef<'div'>, keyof ToastCenterOwnProps>

const ToastCenter = React.forwardRef<HTMLDivElement, ToastCenterProps>(
  (props, forwardedRef) => {
    const { children, ...domProps } = props
    const { context } = useToastContext()
    const { toasts } = context
    return (
      <div {...domProps} ref={forwardedRef}>
        {children({ allToasts: toasts })}
      </div>
    )
  }
)

/**
 * @toast ToastCenterItem
 */

const ToastItemContext = React.createContext<ToastData>(null as any)
function useToastItemContext() {
  return React.useContext(ToastItemContext)
}

interface ToastCenterItemOwnProps {
  children: React.ReactNode
  toastId: string
}
type ToastCenterItemProps = ToastCenterItemOwnProps &
  Omit<React.ComponentPropsWithRef<'div'>, keyof ToastCenterItemOwnProps>

const ToastCenterItemImpl = React.forwardRef<HTMLDivElement, ToastCenterItemProps>(
  (props, forwardedRef) => {
    const { toastId, children, ...domProps } = props
    const {
      context: { toasts },
    } = useToastContext()
    const toast = toasts.find((toast) => toast.id === toastId)
    return toast ? (
      <div ref={forwardedRef} {...domProps}>
        <ToastItemContext.Provider value={toast}>
          {children}
        </ToastItemContext.Provider>
      </div>
    ) : null
  }
)

ToastCenterItemImpl.displayName = 'ToastCenterItem'
const ToastCenterItem = React.memo(ToastCenterItemImpl)

/**
 * @toast ToastWarmer
 */
interface ToastWarmerOwnProps {
  children(props: { activeToasts: ToastData[] }): React.ReactNode
  duration?: number
}
type ToastWarmerProps = ToastWarmerOwnProps &
  Omit<React.ComponentPropsWithRef<'div'>, keyof ToastWarmerOwnProps>

const ToastWarmer = React.forwardRef<HTMLDivElement, ToastWarmerProps>(
  (props, forwardedRef) => {
    const {
      onPointerEnter,
      onPointerLeave,
      children,
      // @todo(toast)
      // duration,
      ...domProps
    } = props
    const [{ context }, dispatchers] = useToastWarmer()
    const { toasts } = context

    return (
      <div
        {...domProps}
        ref={forwardedRef}
        // eslint-disable-next-line @typescript-eslint/unbound-method
        onPointerEnter={composeEventHandlers(onPointerEnter, dispatchers.interact)}
        onPointerLeave={composeEventHandlers(
          onPointerLeave,
          // eslint-disable-next-line @typescript-eslint/unbound-method
          dispatchers.stopInteracting
        )}
      >
        {children({ activeToasts: toasts.filter(isActiveToast) })}
      </div>
    )
  }
)

/**
 * @toast ToastWarmerItem
 */
interface ToastWarmerItemOwnProps {
  progress?: number
  duration?: number
  toastId: string
  children: React.ReactNode
}
type ToastWarmerItemProps = ToastWarmerItemOwnProps &
  Omit<React.ComponentPropsWithRef<'div'>, keyof ToastWarmerItemOwnProps>

const ToastWarmerItemImpl = React.forwardRef<HTMLDivElement, ToastWarmerItemProps>(
  (props, forwardedRef) => {
    const {
      children,
      // @todo(toast):
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      progress,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      duration,
      ...domProps
    } = props
    const {
      context: { toasts },
    } = useToastContext()
    const toast = toasts.find((toast) => toast.id === props.toastId)

    return toast ? (
      <div
        ref={forwardedRef}
        role={toast.role}
        aria-live={toast['aria-live']}
        {...domProps}
      >
        <ToastItemContext.Provider value={toast}>
          {children}
        </ToastItemContext.Provider>
      </div>
    ) : null
  }
)

ToastWarmerItemImpl.displayName = 'ToastWarmerItem'
const ToastWarmerItem = React.memo(ToastWarmerItemImpl)

/**
 * @toast ToastDismiss
 */

interface ToastDismissOwnProps {
  toastId: string
  children: React.ReactNode
}
type ToastDismissProps = ToastDismissOwnProps &
  Omit<React.ComponentPropsWithRef<'button'>, keyof ToastDismissOwnProps>

const ToastDismiss = React.forwardRef<HTMLButtonElement, ToastDismissProps>(
  (props, forwardedRef) => {
    const {
      children,
      onClick,

      ...domProps
    } = props
    const dispatchers = useToastDispatchers()
    const toast = useToastItemContext()
    if (!toast) return null

    return (
      <button
        ref={forwardedRef}
        onClick={composeEventHandlers(onClick, () =>
          dispatchers.dismissToast(toast.id)
        )}
        {...domProps}
      >
        {children}
      </button>
    )
  }
)

/**
 * @toast Toast
 */
type ToastOwnProps = Omit<ToastData, 'id'> & { toastId: string }

type ToastProps = ToastOwnProps &
  Omit<React.ComponentPropsWithRef<'div'>, keyof ToastOwnProps>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Toast = React.forwardRef<HTMLDivElement, ToastProps>((props, forwardedRef) => {
  const {
    children,
    // @todo(toast)
    // onClick,
    toastId,
    type = 'info',
    message: messageProp,
    role = ROLES_BY_TYPE[type],
    'aria-live': ariaLive = ARIA_LIVE_BY_TYPE[type],
    // @todo(toast)
    // ...domProps
  } = props
  const dispatchers = useToastDispatchers()
  const message =
    !messageProp && typeof children === 'string' ? children : messageProp

  if (!message) {
    // dev warning
  }

  React.useEffect(() => {
    dispatchers.addToast({
      id: toastId,
      type,
      message,
      role,
      'aria-live': ariaLive,
      pauseDuration: 0,
      createdAt: Date.now(),
      active: true,
    })
    // TODO: Only invalidate and re-send if the key changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // TODO:
  return null
})

/**
 * @toast exports
 */

ToastProvider.displayName = 'ToastProvider'
ToastCenter.displayName = 'ToastCenter'
ToastCenterItem.displayName = 'ToastCenterItem'
ToastWarmer.displayName = 'ToastWarmer'
ToastWarmerItem.displayName = 'ToastWarmerItem'
Toast.displayName = 'Toast'
ToastDismiss.displayName = 'ToastDismiss'

// const Provider = ToastProvider
// const Center = ToastCenter
// const CenterItem = ToastCenterItem
// const Warmer = ToastWarmer
// const WarmerItem = ToastWarmerItem
// const Unit = Toast
// const Dismiss = ToastDismiss

export {
  ToastProvider,
  ToastCenter,
  ToastCenterItem,
  ToastWarmer,
  ToastWarmerItem,
  Toast,
  ToastDismiss,
  // //
  // Provider,
  // Center,
  // CenterItem,
  // Warmer,
  // WarmerItem,
  // Unit,
  // Dismiss,
  //
  useToastDispatchers,
}
export type { ToastData, ToastType }

/**
 * @toast hooks
 *
 */

// @todo(complexity) 18
// eslint-disable-next-line complexity
function toastStateReducer(
  { state, context }: ToastContextValue,
  event: ToastEvent
): ToastContextValue {
  switch (state) {
    // @todo(toast) fallthrough case in switch
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    case ToastState.Idle: {
      switch (event.type) {
        case ToastEventType.AddToast: {
          return {
            state: ToastState.Timing,
            context: addToast(context, event),
          }
        }
      }
    }
    // @todo(toast) fallthrough case in switch
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    case ToastState.Interacting: {
      switch (event.type) {
        case ToastEventType.AddToast: {
          return {
            state: ToastState.Timing,
            context: addToast(context, event),
          }
        }
        case ToastEventType.DismissToast: {
          const nextContext = dismissToast(context, event)
          return {
            state: hasActiveToasts(nextContext.toasts)
              ? ToastState.Interacting
              : ToastState.Idle,
            context: nextContext,
          }
        }
        case ToastEventType.RemoveToast: {
          const nextContext = removeToast(context, event)
          return {
            state: hasActiveToasts(nextContext.toasts)
              ? ToastState.Interacting
              : ToastState.Idle,
            context: nextContext,
          }
        }
        case ToastEventType.StopInteractingWithToast: {
          const diff = event.time - (context.pausedAt || 0)
          return {
            state: ToastState.Timing,
            context: {
              ...context,
              pausedAt: undefined,
              toasts: context.toasts.map((toast) => ({
                ...toast,
                pauseDuration: toast.pauseDuration + diff,
              })),
            },
          }
        }
      }
    }
    case ToastState.Timing: {
      switch (event.type) {
        case ToastEventType.AddToast: {
          return {
            state: ToastState.Timing,
            context: addToast(context, event),
          }
        }
        case ToastEventType.DismissToast: {
          const nextContext = dismissToast(context, event)
          return {
            state: hasActiveToasts(nextContext.toasts)
              ? ToastState.Timing
              : ToastState.Idle,
            context: nextContext,
          }
        }
        case ToastEventType.RemoveToast: {
          const nextContext = removeToast(context, event)
          return {
            state: hasActiveToasts(nextContext.toasts)
              ? ToastState.Timing
              : ToastState.Idle,
            context: nextContext,
          }
        }
        case ToastEventType.InteractWithToast: {
          return {
            state: ToastState.Interacting,
            context: {
              ...context,
              pausedAt: event.time,
            },
          }
        }
      }
    }
  }
  return { state, context }
}

function useToastState(): [
  React.ReducerState<typeof toastStateReducer>,
  React.Dispatch<React.ReducerAction<typeof toastStateReducer>>
] {
  const [{ state, context }, dispatch] = React.useReducer(
    toastStateReducer,
    initialToastState
  )
  const mergedToasts: ToastData[] = context.toasts.map((toast) => {
    return {
      ...toast,
      duration: toast.duration || DEFAULT_TIMEOUTS[toast.type],
    }
  })

  return [
    {
      state,
      context: {
        ...context,
        toasts: mergedToasts,
      },
    },
    dispatch,
  ]
}

function useToastWarmer(): [ToastContextValue, ToastDispatchContextValue] {
  const [{ state, context }, dispatch] = useToastState()

  const dispatchers: ToastDispatchContextValue = React.useMemo(() => {
    return {
      addToast(toast: ToastData) {
        dispatch({
          type: ToastEventType.AddToast,
          toast,
        })
      },
      dismissToast(toastId: string) {
        dispatch({
          type: ToastEventType.DismissToast,
          toastId,
        })
      },
      removeToast(toastId: string) {
        dispatch({
          type: ToastEventType.RemoveToast,
          toastId,
        })
      },
      interact() {
        dispatch({
          type: ToastEventType.InteractWithToast,
          time: Date.now(),
        })
      },
      stopInteracting() {
        dispatch({
          type: ToastEventType.StopInteractingWithToast,
          time: Date.now(),
        })
      },
    }
  }, [
    dispatch, // dispatch should be a stable reference
  ])

  React.useEffect(() => {
    if (context.pausedAt) {
      // @todo(toast) verify null return or "blank"
      return null
    }

    const now = Date.now()
    const timeouts = context.toasts.map((toast) => {
      const durationLeft =
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        (toast.duration || 0) + toast.pauseDuration - (now - toast.createdAt)

      if (durationLeft < 0) {
        if (toast.active) {
          dispatchers.dismissToast(toast.id)
        }
        return null
      }
      return window.setTimeout(
        () => dispatchers.dismissToast(toast.id),
        durationLeft
      )
    })

    return () => {
      timeouts.forEach((timeout) => {
        window.clearTimeout(timeout)
      })
    }
  }, [context.toasts, context.pausedAt, dispatchers])

  return [{ state, context }, dispatchers]
}

function addToast(context: ToastStateContext, event: ToastEvent): ToastStateContext {
  // console.dir(`addToast`)
  // console.dir(context)
  // console.dir(event)
  if ('toast' in event) {
    const allToasts = [event.toast, ...context.toasts]
    const activeToasts = allToasts.splice(0, ACTIVE_TOAST_LIMIT)
    const inactiveToasts = allToasts
      .splice(ACTIVE_TOAST_LIMIT, allToasts.length - 1)
      .map(setToastInactive)
    return {
      ...context,
      toasts: [...activeToasts, ...inactiveToasts],
    }
  }
  return context
}

function dismissToast(
  context: ToastStateContext,
  event: ToastEvent
): ToastStateContext {
  // console.dir(`dismissToast`)
  // console.dir(context)
  // console.dir(event)
  if ('toastId' in event) {
    return {
      ...context,
      toasts: context.toasts.map((toast) =>
        toast.id === event.toastId ? setToastInactive(toast) : toast
      ),
    }
  }
  return context
}

function removeToast(
  context: ToastStateContext,
  event: ToastEvent
): ToastStateContext {
  // console.dir(`removeToast`)
  // console.dir(context)
  // console.dir(event)
  if ('toastId' in event) {
    return {
      ...context,
      toasts: context.toasts.filter(getFilterById(event)),
    }
  }
  return context
}

function getFilterById(event: ToastEvent): (toast: ToastData) => boolean {
  if ('toastId' in event) {
    return (toast: ToastData) => toast.id !== event.toastId
  }
  return () => true
}

function setToastInactive(toast: ToastData): ToastData {
  return { ...toast, active: false }
}

function hasActiveToasts(toasts: ToastData[]) {
  return toasts.length > 0 && toasts.some((toast) => toast.active)
}

function isActiveToast(toast: ToastData) {
  return toast.active
}

//

// type ToastType = 'error' | 'generic' | 'info' | 'loading' | 'success' | 'warning'
type ToastType = 'error' | 'info' | 'success' | 'warning'

interface ToastData {
  'aria-live'?: 'assertive' | 'off' | 'polite'
  active: boolean
  createdAt: number
  duration?: number
  id: string
  message: string
  pauseDuration: number
  render?(props: { toast: Omit<ToastData, 'render'> }): React.ReactNode
  role?: 'status' | 'alert'
  type: ToastType
}

interface ToastContextValue {
  state: ToastState
  context: ToastStateContext
}

interface ToastDispatchContextValue {
  addToast(toast: ToastData): void
  dismissToast(toastId: string): void
  removeToast(toastId: string): void
  interact(): void
  stopInteracting(): void
}

type ToastEvent =
  | {
      type: ToastEventType.AddToast
      toast: ToastData
    }
  | {
      type: ToastEventType.DismissToast
      toastId: string
    }
  | {
      type: ToastEventType.RemoveToast
      toastId: string
    }
  | {
      type: ToastEventType.StopInteractingWithToast
      time: number
    }
  | {
      type: ToastEventType.InteractWithToast
      time: number
    }

interface ToastStateContext {
  toasts: ToastData[]
  pausedAt: number | undefined
}

export { ARIA_LIVE_BY_TYPE, ROLES_BY_TYPE }
