/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'

import { Button } from '../../components/index'

import { Message, ToastContainer as ToastContainerDiv, Toast } from './Toast.styles'
import type { ToastContainerProps } from './Toast.types'
import { ARIA_LIVE_BY_TYPE, DEFAULT_TIMEOUTS, ROLES_BY_TYPE } from './Toast.types'

// @todo(complexity) 11
// eslint-disable-next-line complexity
const ToastContainer: React.ComponentType<ToastContainerProps> = ({
  action,
  cancelAction,
  duration,
  height,
  heights,
  hovering,
  onMount,
  position,
  preserve,
  remove,
  text,
  type,
  ...props
}) => {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setVisible(true), 0)
  }, [])

  /**
   * @note repaint on mutate (heights)
   */
  React.useEffect(() => {
    setTimeout(() => onMount?.(), 0)
  }, [onMount])

  /**
   * @note remove on duration (restart if hovered)
   * @todo should this be a timer and pause instead?
   *
   */
  React.useEffect(() => {
    let id: NodeJS.Timeout

    if (!preserve && !hovering) {
      id = setTimeout(
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        remove,
        duration ?? DEFAULT_TIMEOUTS[type] ?? DEFAULT_TIMEOUTS['default']
      )
    }
    return () => {
      clearTimeout(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovering, preserve])

  /**
   * @note mutatione (heights)
   * - mount => update w/ current height
   * - unmount => remove from heights array
   */
  const heightRef = React.useRef(height)
  React.useEffect(() => {
    heights[position] = heightRef.current
    return () => {
      heights.splice(position, 1)
    }
  }, [position, heights])

  const sum = React.useCallback((a: number, b: number) => a + b, [])

  const messageProps = {
    'aria-live': ARIA_LIVE_BY_TYPE[type ?? 'default'],
    role: ROLES_BY_TYPE[type ?? 'default'],
  }

  return (
    <ToastContainerDiv
      visible={visible}
      type={type ?? 'default'}
      css={{
        maxHeight: hovering
          ? `${heightRef.current}px !important`
          : position === 0
          ? heightRef.current
          : 50,
        transform: hovering
          ? `translate3d(
                    0px,
                    -${heights.slice(0, position).reduce(sum, 0) + position * 20}px,
                    ${position * -1}px
                  )
                  scale(1) !important`
          : position === 0
          ? visible && 'none'
          : `translate3d(0px, calc(-${heights[0]}px + 100% + -${
              20 * position
            }px),-${position}px)
               scale(${1 - position * 0.05})`,
      }}
    >
      <Toast>
        <Message
          action={!!action}
          cancel={!!cancelAction}
          ref={(el) => (heightRef.current = el?.offsetHeight - 1 + 48)}
          {...messageProps}
        >
          {text}
        </Message>
        {cancelAction && (
          <Button size="1" variant="red" css={{ mr: 10 }}>
            {cancelAction}
          </Button>
        )}
        {action && (
          <Button size="1" variant="green" css={{ mr: 10 }}>
            {action}
          </Button>
        )}
      </Toast>
    </ToastContainerDiv>
  )
}

export default ToastContainer
