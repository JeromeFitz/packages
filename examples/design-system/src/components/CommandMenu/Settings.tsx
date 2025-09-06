import {
  CommandMenuItem,
  Flex,
  Icon,
  Toaster,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/lib/stitches.config'

import { useTheme } from 'next-themes'
import { useCallback, useRef } from 'react'

function Settings() {
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

  const { resolvedTheme: theme, setTheme } = useTheme()
  const handleThemeToggle = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle(darkTheme?.className)
    document.documentElement.classList.toggle('light-theme')
    document.documentElement.style.setProperty('color-scheme', newTheme)
    setTheme(newTheme)
  }, [setTheme, theme])

  return (
    <>
      <CommandMenuItem
        onSelect={() => {
          handleToastInfo('Theme')
          handleThemeToggle()
        }}
        value={'toggle-theme'}
      >
        <Flex gap="3">
          {theme === 'light' ? <Icon.Moon /> : <Icon.Sun />}
          Toggle Theme
        </Flex>
      </CommandMenuItem>
      <CommandMenuItem
        onSelect={() => {
          handleToastInfo('Theme')
          handleThemeToggle()
        }}
        value={'toggle-audio'}
      >
        <Flex gap="3">
          {theme === 'light' ? <Icon.SpeakerModerate /> : <Icon.SpeakerOff />}
          Toggle Audio
        </Flex>
      </CommandMenuItem>
      <Toaster ref={toaster} />
    </>
  )
}

export { Settings }
