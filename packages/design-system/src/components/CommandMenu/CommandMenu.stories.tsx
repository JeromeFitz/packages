import type { Meta, StoryFn } from '@storybook/react'
import type { KeyboardEvent } from 'react'

// import { useCommandState as useCmdk } from 'cmdk'
import { useEffect, useRef, useState } from 'react'

import shows from '../../../../../examples/design-system/src/components/CommandMenu/data/shows.json'
import useDelayedRender from '../../hooks/useDelayedRender.ts'
import { Box, Flex, Icon } from '../index.ts'
import {
  Command,
  CommandBadge,
  CommandEmpty,
  // CommandSeparator,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandLoader,
  CommandTopShine,
  // CommandShortCuts,
  // CommandItem,
} from './CommandMenu.styles.tsx'
import { CommandMenu, CommandMenuItem } from './CommandMenu.tsx'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export default {
  argTypes: {
    // open: {
    //   options: [true, false],
    //   control: { type: 'radio' },
    // },
  },
  component: CommandMenu,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  title: 'CommandMenu',
} as Meta<typeof CommandMenu>

function Settings() {
  return (
    <>
      <CommandMenuItem
        onSelect={() => {
          console.dir(`Toggle: Theme`)
        }}
      >
        <Flex gap="3">
          <Icon.Moon />
          Toggle Theme
        </Flex>
      </CommandMenuItem>
      <CommandMenuItem
        onSelect={() => {
          console.dir(`Toggle: Audio`)
        }}
      >
        <Flex gap="3">
          <Icon.SpeakerModerate />
          Toggle Audio
        </Flex>
      </CommandMenuItem>
    </>
  )
}

function Shows() {
  const loading = !shows
  // const loading = false
  const empty = !!loading

  return (
    <>
      {loading && (
        <Command.Loading>
          <CommandMenuItem>One moment…</CommandMenuItem>
        </Command.Loading>
      )}
      {!empty && (
        <>
          {shows.map((show) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { description, id, slug, title } = show

            return (
              <CommandMenuItem
                key={id}
                onSelect={() => console.dir(`slug: /shows/${slug}`)}
              >
                <Flex gap="3">
                  <Icon.Star />
                  {title}
                </Flex>
              </CommandMenuItem>
            )
          })}
          <CommandMenuItem onSelect={() => console.dir('slug: /shows')}>
            <Flex gap="3">
              <Icon.ListBullet /> View All
            </Flex>
          </CommandMenuItem>
        </>
      )}
    </>
  )
}

function CommandMenuData() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = useState('')

  const [pages, setPages] = useState<string[]>(['home'])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === 'home'

  // @ts-ignore
  // biome-ignore lint/correctness/noUndeclaredVariables: migrate
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
          {pages.map((p) => {
            /**
             * @hack(cmdk) tidy this up please
             */
            const isLink = p === 'home' && pages?.length > 1
            return (
              <CommandBadge
                as={isLink ? 'a' : 'div'}
                cmdk-badge=""
                css={{
                  '@hover': {
                    '&:hover': {
                      cursor: isLink ? 'pointer' : 'default',
                    },
                  },
                }}
                key={p}
                onClick={() => {
                  isLink && popPage()
                }}
              >
                {p}
              </CommandBadge>
            )
          })}
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
          <Flex gap="3">
            <Icon.MagnifyingGlass />
            Search Shows…
          </Flex>
        </CommandMenuItem>
        <CommandMenuItem
          onSelect={() => {
            searchShows()
          }}
        >
          <Flex gap="3">
            <Icon.MagnifyingGlass />
            Search Podcast…
          </Flex>
        </CommandMenuItem>
      </CommandGroup>
      <CommandGroup heading="Pages">
        <CommandMenuItem>
          <Flex gap="3">
            <Icon.IdCard />
            IdCard (Radix)
          </Flex>
        </CommandMenuItem>
        <CommandMenuItem>
          <Flex gap="3">
            <Icon.Microphone />
            Microphone (Hero)
          </Flex>
        </CommandMenuItem>
        <CommandMenuItem>
          <Flex gap="3">
            <Icon.BookOpen />
            BookOpen (Hero)
          </Flex>
        </CommandMenuItem>
        <CommandMenuItem>
          <Flex gap="3">
            <Icon.Return />
            Return (Hero)
          </Flex>
        </CommandMenuItem>
        <CommandMenuItem>
          <Flex gap="3">
            <Icon.Sun />
            Sun (Radix)
          </Flex>
        </CommandMenuItem>
      </CommandGroup>
      <CommandGroup heading="Settings">
        <Settings />
      </CommandGroup>
    </>
  )
}

const Template: StoryFn<typeof CommandMenu> = ({
  children = CommandMenuData,
  ...args
}) => {
  const [open, setOpen] = useState(args?.open)

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [args?.open])

  const { mounted } = useDelayedRender(open, {
    exitDelay: 125,
  })

  return (
    <CommandMenu onOpenChange={setOpen} open={mounted}>
      {children()}
    </CommandMenu>
  )
}

export const Default = {
  args: {},
  render: Template,
}
