import {
  CommandMenuItem,
  Flex,
  Icon,
  Toaster,
} from '@jeromefitz/design-system/src/components'

import { Command } from 'cmdk'
import { useRef } from 'react'

import shows from './data/shows.json'

function Shows() {
  const toaster = useRef<any>()
  const handleToastInfo = (path) => {
    if (toaster?.current) {
      toaster.current.createToast({
        description: `${path}`,
        duration: 2000,
        title: `Route Change:`,
        type: 'info',
      })
    }
  }

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
                onSelect={() => handleToastInfo(slug)}
                value={slug}
              >
                <Flex gap="3">
                  <Icon.Star />
                  {title}
                </Flex>
              </CommandMenuItem>
            )
          })}
          <CommandMenuItem
            onSelect={() => handleToastInfo('View All')}
            value="View-All"
          >
            <Flex gap="3">
              <Icon.ListBullet /> View All
            </Flex>
          </CommandMenuItem>
        </>
      )}
      <Toaster ref={toaster} />
    </>
  )
}

export { Shows }
