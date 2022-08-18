import {
  Box,
  Command,
  CommandInput,
  CommandTopShine,
  CommandBadge,
  CommandLoader,
  CommandList,
  // CommandSeparator,
  CommandGroup,
  CommandEmpty,
  // CommandShortCuts,
  // CommandItem,
  CommandMenuItem,
  Icon,
} from '@jeromefitz/design-system/src/components'
import React from 'react'

import { Settings } from './Settings'
import { Shows } from './Shows'

function CommandMenuData() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = React.useState('')

  const [pages, setPages] = React.useState<string[]>(['home'])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === 'home'

  console.dir(`pages: ${pages}`)

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
  }, [])

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.96)'
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = ''
        }
      }, 100)

      setInputValue('')
    }
  }

  return (
    <Box css={{ margin: '0 auto' }}>
      <Command
        ref={ref}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            bounce()
          }

          if (isHome || inputValue.length) {
            return
          }

          if (e.key === 'Backspace') {
            e.preventDefault()
            popPage()
            bounce()
          }
        }}
      >
        <CommandTopShine cmdk-top-shine="" />
        <div>
          {pages.map((p) => (
            <CommandBadge key={p} cmdk-badge="">
              {p}
            </CommandBadge>
          ))}
        </div>
        <CommandInput
          autoFocus
          placeholder="Type a command or search..."
          onValueChange={(value) => {
            setInputValue(value)
          }}
        />
        <CommandLoader cmdk-loader="" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {activePage === 'home' && (
            <Home
              // searchSettings={() => setPages([...pages, 'settings'])}
              searchShows={() => setPages([...pages, 'shows'])}
            />
          )}
          {activePage === 'shows' && <Shows />}
        </CommandList>
      </Command>
    </Box>
  )
}

/* eslint-disable @typescript-eslint/ban-types */
function Home({ searchShows }: { searchShows: Function }) {
  return (
    <>
      <CommandGroup heading="Shows">
        <CommandMenuItem
          onSelect={() => {
            searchShows()
          }}
        >
          <Icon.MagnifyingGlass />
          Search Shows...
        </CommandMenuItem>
        <CommandMenuItem
          onSelect={() => {
            searchShows()
          }}
        >
          <Icon.MagnifyingGlass />
          Search Podcasts...
        </CommandMenuItem>
      </CommandGroup>
      <CommandGroup heading="Pages">
        <CommandMenuItem>
          <Icon.IdCard />
          About
        </CommandMenuItem>
        <CommandMenuItem>
          <Icon.BookOpen />
          Books
        </CommandMenuItem>
      </CommandGroup>
      <CommandGroup heading="Settings">
        <Settings />
      </CommandGroup>
    </>
  )
}

export { CommandMenuData }
