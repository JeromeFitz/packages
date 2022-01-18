import * as ReactAnnounce from '@radix-ui/react-announce'
import * as React from 'react'

const Announce = ({ children }) => {
  return <ReactAnnounce.Root>{children}</ReactAnnounce.Root>
}

export default Announce
