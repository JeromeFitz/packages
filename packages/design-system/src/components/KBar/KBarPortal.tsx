import { KBarPortal, KBarPositioner, KBarAnimator } from 'kbar'

import { KBarPositionerStyle, KBarAnimatorStyle } from './KBar.styles'

const _KBarPortal = ({ children }) => {
  return (
    <KBarPortal>
      <KBarPositioner className={KBarPositionerStyle()}>
        <KBarAnimator className={KBarAnimatorStyle()}>{children}</KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

export { _KBarPortal as KBarPortal }
