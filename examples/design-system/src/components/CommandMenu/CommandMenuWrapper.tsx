import { CommandMenu } from '@jeromefitz/design-system/src/components'
import { useEffect, useState } from 'react'

import { CommandMenuData } from './CommandMenuData'

function CommandMenuWrapper() {
  const [open, setOpen] = useState(false)

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <CommandMenu open={open} onOpenChange={setOpen}>
      <CommandMenuData />
    </CommandMenu>
  )
}

export { CommandMenuWrapper as CommandMenu }
