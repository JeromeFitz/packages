/**
 * https://www.radix-ui.com/docs/primitives/utilities/announce
 */
import * as ReactAnnounce from '@radix-ui/react-announce'

const Announce = ({ children }) => {
  return <ReactAnnounce.Root>{children}</ReactAnnounce.Root>
}

export { Announce }
