import { Box, Kbd } from '@jeromefitz/design-system/src/components'
import { Command } from 'cmdk'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { CommandItem, CommandShortCuts } from './CommandMenu.styles'

function CommandMenuItem({
  children,
  shortcut,
  onSelect = () => {},
}: {
  children: React.ReactNode
  shortcut?: string
  onSelect?: (value: string) => void
}) {
  return (
    <CommandItem onSelect={onSelect}>
      {children}
      {shortcut && (
        <CommandShortCuts cmdk-vercel-shortcuts="">
          {shortcut.split(' ').map((key) => {
            return <Kbd key={key}>{key}</Kbd>
          })}
        </CommandShortCuts>
      )}
    </CommandItem>
  )
}

function CommandMenu({ children }) {
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  React.useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const [open, setOpen] = React.useState(false)

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
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
    <Command.Dialog open={open} onOpenChange={setOpen} label="Command Menu">
      <AnimatePresence>
        <Box
          animate={{ opacity: 1, scale: 1 }}
          as={motion.div}
          exit={{ opacity: 0, scale: 0.98 }}
          initial={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.1 }}
          css={{
            alignItems: 'center',
            display: 'flex',
            justifyItems: 'center',
            margin: '0 auto',
            position: 'fixed',
            top: '5rem',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </AnimatePresence>
    </Command.Dialog>
  )
}

export { CommandMenu, CommandMenuItem }
