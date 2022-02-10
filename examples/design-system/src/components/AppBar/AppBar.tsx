import {
  AppBar,
  Button,
  Flex,
  Sheet,
  SheetContent,
  SheetTrigger,
  // SheetClose,
  // SheetTitle,
  // SheetDescription,
  Heading,
  Text,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/stitches.config'
import * as Portal from '@radix-ui/react-portal'
import { useKBar } from 'kbar'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Separator } from '../Separator'

const _AppBar = ({}) => {
  const kbar = useKBar()
  const { theme, setTheme } = useTheme()
  const content = `Toggle Theme to: ${theme === 'light' ? 'Dark' : 'Light'}`

  const handleThemeToggle = React.useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle(darkTheme.className)
    document.documentElement.classList.toggle('light-theme')
    document.documentElement.style.setProperty('color-scheme', newTheme)
    setTheme(newTheme)
  }, [setTheme, theme])

  return (
    <AppBar
      css={{
        height: '$7',

        /**
         * @mobile
         */
        '$$offset-bottom': '0px',
        bottom: 'calc($$offset-bottom)',
        left: 'calc(-50vw + 50%)',
        ml: 'auto',
        mr: 'auto',
        position: 'fixed',
        px: '9',
        width: '100vw',

        '@bp1': {
          position: 'sticky',
          width: '100%',
          top: 0,
          left: 0,
        },
      }}
      size="2"
      color="loContrast"
      border
      glass
    >
      <Flex direction="row" justify="between">
        <Flex css={{ ml: '$3' }} justify="start">
          <Button
            css={{ mr: '$2', '&:hover': { cursor: 'pointer' } }}
            size="1"
            onClick={kbar.query.toggle}
          >
            Menu: KBar
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button css={{ '&:hover': { cursor: 'pointer' } }} size="1">
                Menu: Sheet
              </Button>
            </SheetTrigger>
            <Portal.Root>
              <SheetContent
                css={{
                  textAlign: 'center',
                  borderTopLeftRadius: '$4',
                  borderTopRightRadius: '$4',
                  p: '$4',
                }}
                side="bottom"
              >
                <Heading size="3">Menu</Heading>
                <Separator />
                <Text>Hello.</Text>
              </SheetContent>
            </Portal.Root>
          </Sheet>
        </Flex>
        <Flex css={{ mr: '$3' }} justify="end">
          <Button
            css={{ '&:hover': { cursor: 'pointer' } }}
            onClick={() => handleThemeToggle()}
            size="1"
          >
            {content}
          </Button>
        </Flex>
      </Flex>
    </AppBar>
  )
}

export { _AppBar as AppBar }
