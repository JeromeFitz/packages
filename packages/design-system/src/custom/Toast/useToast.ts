import * as React from 'react'

import { ToastContext } from './ToastProvider'

function useToast() {
  return React.useContext(ToastContext)
}

export default useToast
