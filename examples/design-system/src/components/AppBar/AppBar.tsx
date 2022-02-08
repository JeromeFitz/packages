import { AppBar, Button } from '@jeromefitz/design-system/components'
import { darkTheme } from '@jeromefitz/design-system/stitches.config'
import { useTheme } from 'next-themes'
import * as React from 'react'

const _AppBar = () => {
  const { theme, setTheme } = useTheme()
  const content = `Toggle Theme to: ${theme === 'light' ? 'Dark' : 'Light'}`

  const handleClick = React.useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle(darkTheme.className)
    document.documentElement.classList.toggle('light-theme')
    document.documentElement.style.setProperty('color-scheme', newTheme)
    setTheme(newTheme)
  }, [setTheme, theme])

  return (
    <AppBar
      css={{ minHeight: '$7' }}
      size="1"
      color="loContrast"
      border
      sticky
      glass
    >
      <Button
        css={{ position: 'fixed', right: 9, top: 9 }}
        onClick={() => handleClick()}
        size="1"
      >
        {content}
      </Button>
    </AppBar>
  )
}

export { _AppBar as AppBar }
