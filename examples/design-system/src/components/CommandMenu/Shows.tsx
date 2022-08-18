import {
  CommandMenuItem,
  Icon,
  Toaster,
} from '@jeromefitz/design-system/src/components'
import { Command } from 'cmdk'
import React from 'react'

import shows from './data/shows.json'

function Shows() {
  const toaster = React.useRef<any>()
  const handleToastInfo = (path) => {
    if (toaster && toaster.current) {
      toaster.current.createToast({
        duration: 2000,
        description: `${path}`,
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
              <CommandMenuItem key={id} onSelect={() => handleToastInfo(slug)}>
                <Icon.Star />
                {title}
              </CommandMenuItem>
            )
          })}
          <CommandMenuItem onSelect={() => handleToastInfo('View All')}>
            <Icon.ListBullet /> View All
          </CommandMenuItem>
        </>
      )}
      <Toaster ref={toaster} />
    </>
  )
}

export { Shows }
