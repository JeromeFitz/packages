import type { ReactNode } from 'react'

import type { CalloutVariant } from './Callout.types'

import { Icon } from '../Icon'

/**
 * @question(icon) should we be able to pass custom labels to Icon?
 */
const getVariantIcon = (variant: CalloutVariant): ReactNode => {
  switch (variant) {
    case 'error':
      return <Icon.Error />
    case 'info':
      return <Icon.Info />
    case 'note':
      return <Icon.PencilWithPaper />
    case 'quote':
      return <Icon.Quote css={{ transform: 'rotate(180deg)' }} />
    case 'success':
      return <Icon.Success />
    case 'warning':
      return <Icon.Warning />
  }
}

export { getVariantIcon }
