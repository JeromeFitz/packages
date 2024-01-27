import type { ReactNode } from 'react'

import { Command } from 'cmdk'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { Box, Kbd } from '../index'
import { CommandItem, CommandShortCuts } from './CommandMenu.styles'

interface CommandMenuItemProps {
  children: ReactNode
  onSelect?: (value: string) => void
  shortcut?: string
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  value?: any | string
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
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  children: ReactNode | any
  onOpenChange: (open: boolean) => void
  open: boolean
  wrapperCss?: any
}
function CommandMenu({
  children,
  onOpenChange,
  open = false,
  wrapperCss = {},
}: CommandMenuProps) {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const css = {
    '@bp1': { height: 'inherit', top: '5rem' },
    alignItems: 'center',
    display: 'flex',
    // height: '95%',
    justifyItems: 'center',
    margin: '0 auto',
    padding: '0 $4',
    position: 'fixed',
    top: '1rem',
    width: '100%',
    ...wrapperCss,
  }

  return (
    <Command.Dialog label="Command Menu" onOpenChange={onOpenChange} open={open}>
      <AnimatePresence>
        <Box
          animate={{ opacity: 1, scale: 1 }}
          as={motion.div}
          css={css}
          exit={{ opacity: 0, scale: 0.96 }}
          initial={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.125 }}
        >
          {children}
        </Box>
      </AnimatePresence>
    </Command.Dialog>
  )
}

export { CommandMenu, CommandMenuItem }
