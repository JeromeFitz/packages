import dynamic from 'next/dynamic'
import * as React from 'react'

// import { KBarActions } from './KBarActions'
const KBarActions = dynamic(() =>
  import('./KBarActions').then((mod: any) => mod.KBarActions)
)
const KBarPortal = dynamic(() =>
  import('./KBarPortal').then((mod: any) => mod.KBarPortal)
)

/**
 * @note must be wrapped by KBarProvider (see: Providers)
 */
const KBar = () => {
  return (
    <>
      <KBarActions />
      <KBarPortal />
    </>
  )
}

export { KBar }
