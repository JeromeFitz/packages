import { KBarPortal, KBarPositioner, KBarAnimator } from 'kbar'

import { KBarPositionerStyle, KBarAnimatorStyle } from './KBar.styles'

const _KBarPortal = ({ children }) => {
  return (
    <KBarPortal>
      {/* @todo(react-18) */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <KBarPositioner className={KBarPositionerStyle()}>
        {/* @todo(react-18) */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <KBarAnimator className={KBarAnimatorStyle()}>{children}</KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

export { _KBarPortal as KBarPortal }
