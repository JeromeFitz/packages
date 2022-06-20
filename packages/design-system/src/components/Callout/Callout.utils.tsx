import { Icon } from '../Icon'

import type { CalloutVariant } from './Callout.types'

/**
 * @question(icon) should we be able to pass custom labels to Icon?
 */
const getVariantIcon = (variant: CalloutVariant): React.ReactNode => {
  switch (variant) {
    case 'error':
      return <Icon.Error />
    case 'info':
      return <Icon.Info />
    case 'success':
      return <Icon.Success />
    case 'warning':
      return <Icon.Warning />
    case 'quote':
      return <Icon.Quote />
  }
}

export { getVariantIcon }
