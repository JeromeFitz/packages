import { KBarProvider } from 'kbar'
import dynamic from 'next/dynamic'
import * as React from 'react'

// import { KBarActions } from './KBarActions'
const KBarActions = dynamic(() =>
  import('./KBarActions').then((mod: any) => mod.KBarActions)
)
const KBar = dynamic(() => import('./KBar').then((mod: any) => mod.KBar))

const KBarProviderApp = ({ children }) => {
  return (
    <KBarProvider actions={[]}>
      <KBarActions />
      <KBar />
      {children}
    </KBarProvider>
  )
}

export { KBarProviderApp }
