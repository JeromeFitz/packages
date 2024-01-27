import {
  Box,
  Focused,
  Icon,
  // @core
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicatorWithArrow,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuLinkText,
  NavigationMenuLinkTitle,
  NavigationMenuList,
  // @custom
  NavigationMenuListContent,
  NavigationMenuListItem,
  NavigationMenuListItemLink,
  NavigationMenuTriggerWithCaret,
  NavigationMenuViewport,
  NavigationMenuViewportPosition,
  Selected,
} from '@jeromefitz/design-system/src/components'

import { LayoutGroup } from 'framer-motion'
import NextLink from 'next/link'
import { useState } from 'react'

const menu = [
  {
    id: 'events',
    items: [
      // {
      //   id: 'title-1',
      //   url: '/about',
      //   title: 'Title 1',
      //   description: 'Description of Event Title 1.',
      // },
      {
        description: 'Description of Event Title 2.',
        id: 'title-2',
        title: 'Title 2',
        url: '/about',
      },
      {
        description: 'Listing of all Upcoming Events',
        id: 'title-3',
        title: 'View All',
        url: '/about',
      },
      // {
      //   id: 'title-1b',
      //   url: '/about',
      //   title: 'Title 1b',
      //   description: 'Description of Show Title 1b.',
      // },
      // {
      //   id: 'title-2b',
      //   url: '/about',
      //   title: 'Title 2b',
      //   description: 'Description of Show Title 2b.',
      // },
      // {
      //   id: 'title-3b',
      //   url: '/about',
      //   title: 'Title 3b',
      //   description: 'Description of Show Title 3b.',
      // },
    ],
    layout: 'one',
    title: 'Upcoming Events',
    url: '/',
  },
  {
    id: 'shows',
    items: [
      {
        description: 'Description of Item 1. Description of Item 1.',
        id: 'item-1',
        title: 'Item 1',
        url: '/',
      },
      {
        description: 'Description of Item 2.',
        id: 'item-2',
        title: 'Item 2',
        url: '/',
      },
      {
        description: 'Description of Item 3.',
        id: 'item-3',
        title: 'Item 3',
        url: '/',
      },
      {
        description: 'Description of Item 1b.',
        id: 'item-1b',
        title: 'Item 1b',
        url: '/',
      },
      {
        description: 'Description of Item 2b.',
        id: 'item-2b',
        title: 'Item 2b',
        url: '/',
      },
      {
        description: 'Description of Item 3b. Description of Item 3b.',
        id: 'item-3b',
        title: 'Item 3b',
        url: '/',
      },
    ],
    layout: 'two',
    title: 'Shows',
    url: '/',
  },
  { id: 'direct-link', layout: null, title: 'Direct Link', url: '/' },
]

const NavigationMenuContentContainer = ({ id, items, layout }) => {
  const [focused, setFocused] = useState(null)
  const [selected, setSelected] = useState(null)

  const isCallout = id === 'events'
  const calloutId = 'callout-id'

  return (
    <NavigationMenuListContent
      css={{ flexDirection: 'column' }}
      layout={layout}
      onMouseLeave={() => setFocused(null)}
    >
      <LayoutGroup id={`nmlc-${id}`}>
        {isCallout && (
          <NavigationMenuListItem
            css={{
              gridRow: 'span 3',
            }}
            key={calloutId}
          >
            <NextLink href="/" legacyBehavior passHref>
              <NavigationMenuListItemLink
                focus
                onClick={() => setSelected(calloutId)}
                onFocus={() => setFocused(calloutId)}
                onKeyDown={(event: { key: string }) =>
                  event.key === 'Enter' ? setSelected(calloutId) : null
                }
                onMouseEnter={() => setFocused(calloutId)}
                type="callout"
              >
                <Box as="span" css={{ mx: '$2' }}>
                  <NavigationMenuLinkTitle
                    css={{
                      color: '$loContrast',
                      fontSize: '1.125rem',
                      my: '$2',
                    }}
                  >
                    <>
                      <Icon.Ticket css={{ marginBottom: '1rem' }} />
                      Upcoming Event Title
                    </>
                  </NavigationMenuLinkTitle>
                  <NavigationMenuLinkText
                    css={{
                      color: '$hiContrast',
                      fontSize: '0.875rem',
                      lineHeight: 1.3,
                      m: 0,
                      p: 0,
                    }}
                  >
                    FRI 03/04 08:00PM
                  </NavigationMenuLinkText>
                </Box>
                {focused === calloutId ? (
                  <Focused layoutId="highlight" type="callout" />
                ) : null}
                {selected === calloutId ? <Selected layoutId="underline" /> : null}
              </NavigationMenuListItemLink>
            </NextLink>
          </NavigationMenuListItem>
        )}
        {items.map((item) => (
          <NavigationMenuListItem css={{ mb: '$2' }} key={item.id}>
            <NextLink href={item.url} legacyBehavior passHref>
              <NavigationMenuListItemLink
                focus
                onClick={() => setSelected(item.id)}
                onFocus={() => setFocused(item.id)}
                onKeyDown={(event: { key: string }) =>
                  event.key === 'Enter' ? setSelected(item.id) : null
                }
                onMouseEnter={() => setFocused(item.id)}
              >
                <Box as="span">
                  <NavigationMenuLinkTitle>{item.id}</NavigationMenuLinkTitle>
                  <NavigationMenuLinkText>
                    {item.subtitle ?? item.description}
                  </NavigationMenuLinkText>
                </Box>
                {focused === item.id ? <Focused layoutId="highlight" /> : null}
                {selected === item.id ? <Selected layoutId="underline" /> : null}
              </NavigationMenuListItemLink>
            </NextLink>
          </NavigationMenuListItem>
        ))}
      </LayoutGroup>
    </NavigationMenuListContent>
  )
}

const NavigationMenuImpl = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((menuItem) => {
          const { id, items, layout, title, url } = menuItem
          const hasChildren = !!items

          return hasChildren ? (
            <NavigationMenuItem key={`kmi-${id}`}>
              <NavigationMenuTriggerWithCaret>
                {title}
              </NavigationMenuTriggerWithCaret>
              <NavigationMenuContent>
                <NavigationMenuContentContainer
                  id={id}
                  items={items}
                  layout={layout}
                />
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`kmi-${id}`}>
              <NavigationMenuLink href={url}>{title}</NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}

        <NavigationMenuIndicatorWithArrow />
      </NavigationMenuList>

      <NavigationMenuViewportPosition>
        <NavigationMenuViewport />
      </NavigationMenuViewportPosition>
    </NavigationMenu>
  )
}

export { NavigationMenuImpl as NavigationMenu }
