/* eslint-disable @typescript-eslint/restrict-plus-operands */
import * as Portal from '@radix-ui/react-portal'
import { useHover } from '@react-aria/interactions'
import * as React from 'react'

import { Toaster as ToasterDiv } from './Toast.styles'

import { useToast, ToastContainer } from './index'

function useForceUpdate(): () => void {
  return React.useReducer(() => ({}), {})[1]
}

const Toaster = () => {
  const { hoverProps, isHovered } = useHover({})
  const { current } = useToast()

  const messages = current?.messages ?? []

  const heights = React.useRef([])

  const forceUpdate = useForceUpdate()

  return (
    <Portal.Root>
      <ToasterDiv multiple={messages.length > 1} {...hoverProps}>
        {messages.map((e, i) => {
          return (
            <ToastContainer
              action={e.action}
              cancelAction={e.cancelAction}
              duration={e.duration}
              height={e.height}
              heights={heights.current}
              hovering={isHovered}
              id={e.key}
              key={e.key}
              onMount={forceUpdate}
              position={messages.length - 1 - i}
              preserve={e.preserve}
              remove={() => {
                current?.removeToastByKey(e.key)
              }}
              text={e.text}
              type={e.type}
            />
          )
        })}
      </ToasterDiv>
    </Portal.Root>
  )
}

export default Toaster
