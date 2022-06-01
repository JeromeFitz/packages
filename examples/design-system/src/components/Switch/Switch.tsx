import {
  Switch,
  SwitchIcon,
  Separator,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/lib/stitches.config'
import {
  MoonIcon,
  SpeakerOffIcon,
  SpeakerModerateIcon,
  SunIcon,
} from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import * as React from 'react'

const SwitchImpl = () => {
  const { theme, setTheme } = useTheme()
  const handleThemeToggle = React.useCallback(() => {
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
        onCheckedChange={() => handleThemeToggle()}
        iconOn={<MoonIcon />}
        iconOff={<SunIcon />}
      />
      <Separator decorative margin="my3" size="full" />
      <SwitchIcon
        checked={theme === 'dark'}
        onCheckedChange={() => handleThemeToggle()}
        iconOn={<SpeakerModerateIcon />}
        iconOff={<SpeakerOffIcon />}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        size="4"
      />
      <Separator decorative margin="my3" size="full" />
      <Switch />
      <Separator decorative margin="my3" size="full" />
    </>
  )
}

export { SwitchImpl as Switch }
