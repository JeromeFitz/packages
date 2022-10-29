import type { ReactNode } from 'react'

type CalloutVariant = 'error' | 'info' | 'note' | 'quote' | 'success' | 'warning'

interface CalloutProps {
  children: ReactNode
  label?: ReactNode | string
  variant?: CalloutVariant
}

export type { CalloutVariant, CalloutProps }
