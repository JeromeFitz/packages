import { TicketIcon } from '@heroicons/react/outline'
import {
  // @core
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  // @custom
  NavigationMenuListContent,
  NavigationMenuListItem,
  NavigationMenuLinkTitle,
  NavigationMenuLinkText,
  NavigationMenuViewportPosition,
} from '@jeromefitz/design-system/src/components'
import NextLink from 'next/link'
import * as React from 'react'

import { cssIconHeroToRadix2 } from '../../lib/constants'

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

const NavigationMenuListContentItem = React.forwardRef(
  (props: any, forwardedRef) => (
    <NavigationMenuListItem>
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
          <NavigationMenuLinkTitle>{props.title}</NavigationMenuLinkTitle>
          <NavigationMenuLinkText>{props.children}</NavigationMenuLinkText>
        </NavigationMenuLink>
      </NextLink>
    </NavigationMenuListItem>
  )
)

const NavigationMenuListContentItemCallout = React.forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, ...props }, forwardedRef) => (
    <NavigationMenuListItem css={{ gridRow: 'span 3' }}>
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
        <NavigationMenuLinkTitle
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
        </NavigationMenuLinkTitle>
        <NavigationMenuLinkText
          css={{
            fontSize: 14,
            color: '$colors$violet4',
            lineHeight: 1.3,
          }}
        >
          FRI 03/04 08:00PM
        </NavigationMenuLinkText>
      </NavigationMenuLink>
    </NavigationMenuListItem>
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
                <NavigationMenuListContent layout={layout}>
                  {id === 'events' && <NavigationMenuListContentItemCallout />}

                  {items.map((item) => {
                    return (
                      <NavigationMenuListContentItem
                        key={`cli-${item.id}`}
                        href={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </NavigationMenuListContentItem>
                    )
                  })}
                </NavigationMenuListContent>
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

      <NavigationMenuViewportPosition>
        <NavigationMenuViewport />
      </NavigationMenuViewportPosition>
    </NavigationMenu>
  )
}

export { _NavigationMenu as NavigationMenu }
