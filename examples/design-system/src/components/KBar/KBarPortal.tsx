import { KBarPortal } from '@jeromefitz/design-system/src/custom'
import dynamic from 'next/dynamic'
import * as React from 'react'

import { KBar } from './KBar'
// import { KBarActions } from './KBarActions'

const KBarActions = dynamic(() =>
  import('./KBarActions').then((mod: any) => mod.KBarActions)
)

/**
 * @note must be wrapped by KBarProvider (see: Providers)
 */
const _KBarPortal = () => {
  return (
    <>
      <KBarActions />
      <KBarPortal>
        <KBar />
      </KBarPortal>
    </>
  )
}

export { _KBarPortal as KBarPortal }
