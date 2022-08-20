import {
  CommandMenuItem,
  Flex,
  Icon,
  Toaster,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/lib/stitches.config'
import { useTheme } from 'next-themes'
import React from 'react'

function Settings() {
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

  const { resolvedTheme: theme, setTheme } = useTheme()
  const handleThemeToggle = React.useCallback(() => {
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
