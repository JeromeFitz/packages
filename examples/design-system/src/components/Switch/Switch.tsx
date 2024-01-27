import {
  Icon,
  Separator,
  Switch,
  SwitchIcon,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/lib/stitches.config'

import { useTheme } from 'next-themes'
import { useCallback } from 'react'

const SwitchImpl = () => {
  const { setTheme, theme } = useTheme()
  const handleThemeToggle = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle(darkTheme?.className)
    document.documentElement.classList.toggle('light-theme')
    document.documentElement.style.setProperty('color-scheme', newTheme)
    setTheme(newTheme)
  }, [setTheme, theme])

  return (
    <>
      <SwitchIcon
        checked={theme === 'dark'}
        iconOff={<Icon.Sun />}
        iconOn={<Icon.Moon />}
        onCheckedChange={() => handleThemeToggle()}
      />
      <Separator decorative my="3" size="full" />
      <SwitchIcon
        checked={theme === 'dark'}
        iconOff={<Icon.SpeakerOff />}
        iconOn={<Icon.SpeakerModerate />}
        onCheckedChange={() => handleThemeToggle()}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        size="4"
      />
      <Separator decorative my="3" size="full" />
      <Switch />
      <Separator decorative my="3" size="full" />
    </>
  )
}

export { SwitchImpl as Switch }
