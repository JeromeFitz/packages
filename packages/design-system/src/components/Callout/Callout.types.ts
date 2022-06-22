import React from 'react'

type CalloutVariant = 'error' | 'info' | 'note' | 'quote' | 'success' | 'warning'

interface CalloutProps {
  children: React.ReactNode
  label?: React.ReactNode | string
  variant?: CalloutVariant
}

export type { CalloutVariant, CalloutProps }
