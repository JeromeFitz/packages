import { TicketIcon } from '@heroicons/react/outline'
import {
  Box,
  // @core
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTriggerWithCaret,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuIndicatorWithArrow,
  // @custom
  NavigationMenuListContent,
  NavigationMenuListItem,
  NavigationMenuListItemLink,
  NavigationMenuLinkTitle,
  NavigationMenuLinkText,
  NavigationMenuViewportPosition,
  Focused,
  Selected,
} from '@jeromefitz/design-system/src/components'
import { LayoutGroup } from 'framer-motion'
import NextLink from 'next/link'
import * as React from 'react'

import { cssIconHeroToRadix2 } from '../../lib/constants'

const menu = [
  {
    id: 'events',
    url: '/',
    layout: 'one',
    title: 'Upcoming Events',
    items: [
      // {
      //   id: 'title-1',
      //   url: '/about',
      //   title: 'Title 1',
      //   description: 'Description of Event Title 1.',
      // },
      {
        id: 'title-2',
        url: '/about',
        title: 'Title 2',
        description: 'Description of Event Title 2.',
      },
      {
        id: 'title-3',
        url: '/about',
        title: 'View All',
        description: 'Listing of all Upcoming Events',
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
  },
  {
    id: 'shows',
    url: '/',
    layout: 'two',
    title: 'Shows',
    items: [
      {
        id: 'item-1',
        url: '/',
        title: 'Item 1',
        description: 'Description of Item 1. Description of Item 1.',
      },
      {
        id: 'item-2',
        url: '/',
        title: 'Item 2',
        description: 'Description of Item 2.',
      },
      {
        id: 'item-3',
        url: '/',
        title: 'Item 3',
        description: 'Description of Item 3.',
      },
      {
        id: 'item-1b',
        url: '/',
        title: 'Item 1b',
        description: 'Description of Item 1b.',
      },
      {
        id: 'item-2b',
        url: '/',
        title: 'Item 2b',
        description: 'Description of Item 2b.',
      },
      {
        id: 'item-3b',
        url: '/',
        title: 'Item 3b',
        description: 'Description of Item 3b. Description of Item 3b.',
      },
    ],
  },
  { id: 'direct-link', url: '/', layout: null, title: 'Direct Link' },
]

const NavigationMenuContentContainer = ({ id, items, layout }) => {
  const [focused, setFocused] = React.useState(null)
  const [selected, setSelected] = React.useState(null)

  const isCallout = id === 'events'
  const calloutId = 'callout-id'

  return (
    <NavigationMenuListContent
      layout={layout}
      css={{ flexDirection: 'column' }}
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
            <NextLink href="/" passHref>
              <NavigationMenuListItemLink
                onClick={() => setSelected(calloutId)}
                onKeyDown={(event: { key: string }) =>
                  event.key === 'Enter' ? setSelected(calloutId) : null
                }
                onFocus={() => setFocused(calloutId)}
                onMouseEnter={() => setFocused(calloutId)}
                focus
                type="callout"
              >
                <Box as="span" css={{ mx: '$2' }}>
                  <NavigationMenuLinkTitle
                    css={{
                      fontSize: '1.125rem',
                      color: '$loContrast',
                      my: '$2',
                    }}
                  >
                    <>
                      <TicketIcon
                        className="hi2ri"
                        style={{ ...cssIconHeroToRadix2, marginBottom: '1rem' }}
                      />
                      Upcoming Event Title
                    </>
                  </NavigationMenuLinkTitle>
                  <NavigationMenuLinkText
                    css={{
                      m: 0,
                      p: 0,
                      fontSize: '0.875rem',
                      color: '$hiContrast',
                      lineHeight: 1.3,
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
            <NextLink passHref href={item.url}>
              <NavigationMenuListItemLink
                onClick={() => setSelected(item.id)}
                onKeyDown={(event: { key: string }) =>
                  event.key === 'Enter' ? setSelected(item.id) : null
                }
                onFocus={() => setFocused(item.id)}
                onMouseEnter={() => setFocused(item.id)}
                focus
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
          const { id, layout, title, url, items } = menuItem
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
