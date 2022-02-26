import { TicketIcon } from '@heroicons/react/outline'
import {
  // Box,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  // Text,
} from '@jeromefitz/design-system/src/components'
import NextLink from 'next/link'
import * as React from 'react'

import { cssIconHeroToRadix2 } from '../../lib/constants'

import {
  ListContent,
  ListItem,
  LinkTitle,
  LinkText,
  ViewportPosition,
} from './NavigationMenu.styles'

const menu = [
  {
    id: 'events',
    href: '/',
    layout: 'one',
    title: 'Upcoming Events',
    items: [
      // {
      //   id: 'title-1',
      //   href: '/about',
      //   title: 'Title 1',
      //   description: 'Description of Event Title 1.',
      // },
      // {
      //   id: 'title-2',
      //   href: '/about',
      //   title: 'Title 2',
      //   description: 'Description of Event Title 2.',
      // },
      {
        id: 'title-3',
        href: '/about',
        title: 'View All',
        description: 'Listing of all Upcoming Events',
      },
      // {
      //   id: 'title-1b',
      //   href: '/about',
      //   title: 'Title 1b',
      //   description: 'Description of Show Title 1b.',
      // },
      // {
      //   id: 'title-2b',
      //   href: '/about',
      //   title: 'Title 2b',
      //   description: 'Description of Show Title 2b.',
      // },
      // {
      //   id: 'title-3b',
      //   href: '/about',
      //   title: 'Title 3b',
      //   description: 'Description of Show Title 3b.',
      // },
    ],
  },
  {
    id: 'shows',
    href: '/',
    layout: 'two',
    title: 'Shows',
    items: [
      {
        id: 'item-1',
        href: '/',
        title: 'Item 1',
        description: 'Description of Item 1.',
      },
      {
        id: 'item-2',
        href: '/',
        title: 'Item 2',
        description: 'Description of Item 2.',
      },
      {
        id: 'item-3',
        href: '/',
        title: 'Item 3',
        description: 'Description of Item 3.',
      },
      {
        id: 'item-1b',
        href: '/',
        title: 'Item 1b',
        description: 'Description of Item 1b.',
      },
      {
        id: 'item-2b',
        href: '/',
        title: 'Item 2b',
        description: 'Description of Item 2b.',
      },
      {
        id: 'item-3b',
        href: '/',
        title: 'Item 3b',
        description: 'Description of Item 3b.',
      },
    ],
  },
  { id: 'direct-link', href: '/', layout: null, title: 'Direct Link' },
]

const ListContentItem = React.forwardRef((props: any, forwardedRef) => (
  <ListItem>
    <NextLink passHref href={props?.href}>
      <NavigationMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,
          '&:hover': { backgroundColor: '$colors$mauve8' },
        }}
      >
        <LinkTitle>{props.title}</LinkTitle>
        <LinkText>{props.children}</LinkText>
      </NavigationMenuLink>
    </NextLink>
  </ListItem>
))

const ListContentItemCallout = React.forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, ...props }, forwardedRef) => (
    <ListItem css={{ gridRow: 'span 3' }}>
      <NavigationMenuLink
        {...props}
        href="/"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={forwardedRef}
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, $colors$violet9 0%, $colors$blue9 100%);`,
          borderRadius: 6,
          padding: 25,
        }}
      >
        <LinkTitle
          css={{
            fontSize: 18,
            color: 'white',
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
        </LinkTitle>
        <LinkText
          css={{
            fontSize: 14,
            color: '$colors$violet4',
            lineHeight: 1.3,
          }}
        >
          FRI 03/04 08:00PM
        </LinkText>
      </NavigationMenuLink>
    </ListItem>
  )
)

const _NavigationMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((menuItem) => {
          const { id, href, layout, title, items } = menuItem
          const hasChildren = !!items
          // console.dir(`title: ${title}`)
          // console.dir(`hasChildren: ${hasChildren}`)

          return hasChildren ? (
            <NavigationMenuItem key={`kmi-${id}`}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <NavigationMenuTrigger>
                {/* <Box as="span">{title}</Box> */}
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ListContent layout={layout}>
                  {id === 'events' && <ListContentItemCallout />}

                  {items.map((item) => {
                    return (
                      <ListContentItem
                        key={`cli-${item.id}`}
                        href={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </ListContentItem>
                    )
                  })}
                </ListContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`kmi-${id}`}>
              <NavigationMenuLink href={href}>{title}</NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  )
}

export { _NavigationMenu as NavigationMenu }
