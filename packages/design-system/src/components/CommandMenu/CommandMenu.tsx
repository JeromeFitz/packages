import { Command } from 'cmdk'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

import { Box, Kbd } from '../index'

import { CommandItem, CommandShortCuts } from './CommandMenu.styles'

interface CommandMenuItemProps {
  children: ReactNode
  onSelect?: (value: string) => void
  shortcut?: string
  value?: string | any
}
function CommandMenuItem({
  children,
  onSelect = () => {},
  shortcut,
  value = children,
}: CommandMenuItemProps) {
  return (
    <CommandItem onSelect={onSelect} value={value}>
      {children}
      {shortcut && (
        <CommandShortCuts cmdk-shortcuts="">
          {shortcut.split(' ').map((key) => {
            return <Kbd key={key}>{key}</Kbd>
          })}
        </CommandShortCuts>
      )}
    </CommandItem>
  )
}

interface CommandMenuProps {
  children: ReactNode | any
  open: boolean
  onOpenChange: (open: boolean) => void
  wrapperCss?: any
}
function CommandMenu({
  children,
  open = false,
  onOpenChange,
  wrapperCss = {},
}: CommandMenuProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const css = {
    alignItems: 'center',
    display: 'flex',
    // height: '95%',
    justifyItems: 'center',
    padding: '0 $4',
    margin: '0 auto',
    position: 'fixed',
    top: '1rem',
    width: '100%',
    '@bp1': { top: '5rem', height: 'inherit' },
    ...wrapperCss,
  }

  return (
    <Command.Dialog open={open} onOpenChange={onOpenChange} label="Command Menu">
      <AnimatePresence>
        <Box
          animate={{ opacity: 1, scale: 1 }}
          as={motion.div}
          exit={{ opacity: 0, scale: 0.96 }}
          initial={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.125 }}
          css={css}
        >
          {children}
        </Box>
      </AnimatePresence>
    </Command.Dialog>
  )
}

export { CommandMenu, CommandMenuItem }
