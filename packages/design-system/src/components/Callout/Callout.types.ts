import React from 'react'

type CalloutVariant = 'error' | 'info' | 'success' | 'warning' | 'quote'

interface CalloutProps {
  children: React.ReactNode
  label?: React.ReactNode | string
  variant: CalloutVariant
}

export type { CalloutVariant, CalloutProps }
