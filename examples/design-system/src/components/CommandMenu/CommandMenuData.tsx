import type { KeyboardEvent } from 'react'

import {
  Box,
  Command,
  CommandBadge,
  CommandEmpty,
  // CommandSeparator,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandLoader,
  // CommandItem,
  CommandMenuItem,
  // CommandShortCuts,
  CommandTopShine,
  Flex,
  Icon,
} from '@jeromefitz/design-system/src/components'

// import { useCommandState as useCmdk } from 'cmdk'
import { useCallback, useRef, useState } from 'react'

import { Settings } from './Settings'
import { Shows } from './Shows'

function CommandMenuData() {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  const ref = useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = useState('')

  const [pages, setPages] = useState<string[]>(['home'])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === 'home'

  const popPage = useCallback(() => {
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
      }, 125)

      setInputValue('')
    }
  }

  return (
    <Box
      css={{
        '@bp1': {
          maxWidth: '640px',
          // padding: '0 $3',
        },
        margin: '0 auto',
        maxWidth: '100%',
        padding: '0',
        width: '100%',
      }}
    >
      <Command
        loop
        onClick={() => {
          bounce()
        }}
        onKeyDown={(e: KeyboardEvent) => {
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
        ref={ref}
      >
        <CommandTopShine cmdk-top-shine="" />
        <div>
          {pages.map((p) => (
            <CommandBadge cmdk-badge="" key={p}>
              {p}
            </CommandBadge>
          ))}
        </div>
        <CommandInput
          autoFocus
          onValueChange={(value) => {
            setInputValue(value)
          }}
          placeholder="Type a command or search..."
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
          {/* <SubItem>Test</SubItem> */}
        </CommandList>
      </Command>
    </Box>
  )
}
// const SubItem = (props) => {
//   const cmd = useCmdk((state) => state)
//   const search = useCmdk((state) => state.search)
//   console.dir(`cmd`)
//   console.dir(cmd)
//   console.dir(`search`)
//   console.dir(search)
//   if (!search) return null
//   return <CommandMenuItem {...props} />
// }
/* eslint-disable @typescript-eslint/ban-types */
function Home({ searchShows }: { searchShows: Function }) {
  return (
    <>
      <CommandGroup heading="Shows">
        <CommandMenuItem
          onSelect={() => {
            searchShows()
          }}
          value={'search-shows'}
        >
          <Flex gap="3">
            <Icon.MagnifyingGlass />
            Search Shows...
          </Flex>
        </CommandMenuItem>

        <CommandMenuItem
          onSelect={() => {
            searchShows()
          }}
          value={'search-podcasts'}
        >
          <Flex gap="3">
            <Icon.MagnifyingGlass />
            Search Podcasts...
          </Flex>
        </CommandMenuItem>
      </CommandGroup>
      <CommandGroup heading="Pages">
        <CommandMenuItem value={'about'}>
          <Flex gap="3">
            <Icon.IdCard />
            About
          </Flex>
        </CommandMenuItem>
        <CommandMenuItem value={'books'}>
          <Flex gap="3">
            <Icon.BookOpen />
            Books
          </Flex>
        </CommandMenuItem>
      </CommandGroup>
      <CommandGroup heading="Settings">
        <Settings />
      </CommandGroup>
    </>
  )
}

export { CommandMenuData }
