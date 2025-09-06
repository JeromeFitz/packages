import {
  AppBar,
  Box,
  Button,
  Flex,
  Heading,
  Separator,
  Sheet,
  SheetContent,
  SheetTrigger,
  Text,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/lib/stitches.config'

import { useTheme } from 'next-themes'
import { useCallback, useState } from 'react'

const _AppBar = ({}) => {
  const { setTheme, theme } = useTheme()

  const handleThemeToggle = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle(darkTheme?.className)
    document.documentElement.classList.toggle('light-theme')
    document.documentElement.style.setProperty('color-scheme', newTheme)
    setTheme(newTheme)
  }, [setTheme, theme])

  const [isSheetOpen, isSheetOpenSet] = useState(false)
  const handleIsSheetOpen = (newMenuState: boolean) => {
    isSheetOpenSet(newMenuState)
  }

  return (
    <AppBar
      border
      color="loContrast"
      css={{
        '@bp1': {
          left: 0,
          position: 'sticky',
          top: 0,
          width: '100%',
        },
        /**
         * @mobile
         */
        '$$offset-bottom': '0px',
        bottom: 'calc($$offset-bottom)',
        height: '$7',
        left: 'calc(-50vw + 50%)',
        ml: 'auto',
        mr: 'auto',
        position: 'fixed',
        px: '9',

        width: '100vw',
      }}
      glass
      size="2"
    >
      <Flex direction="row" justify="between">
        <Flex css={{ ml: '$3' }} direction="row" justify="start">
          {/* <Box css={{ '@initial': { display: 'none' } }}> */}
          <Flex>
            <Button
              css={{
                '@hover': {
                  '&:hover, &:hover + &': {
                    cursor: 'pointer',
                  },
                },
                mr: '$2',
                py: '$2',
              }}
              ghost
              size="1"
            >
              Menu: Command (Todo)
            </Button>
          </Flex>
          {/* </Box> */}
          <Box css={{ '@bp1': { display: 'none' } }}>
            <Sheet onOpenChange={handleIsSheetOpen} open={isSheetOpen}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <SheetTrigger asChild>
                <Button css={{ '&:hover': { cursor: 'pointer' } }} size="1">
                  Menu: Sheet
                </Button>
              </SheetTrigger>
              <SheetContent
                css={{
                  textAlign: 'center',
                }}
                handleIsSheetOpen={handleIsSheetOpen}
                side="bottom"
              >
                <Heading size="3">Menu</Heading>
                <Separator decorative my="3" size="full" />
                <Text>Hello.</Text>
              </SheetContent>
            </Sheet>
          </Box>
        </Flex>
        <Flex css={{ mr: '$3' }} justify="end">
          <Button
            css={{ '&:hover': { cursor: 'pointer' } }}
            onClick={() => handleThemeToggle()}
            size="1"
          >
            <Box as="span" css={{ mr: '$1' }}>
              Toggle Theme:
            </Box>
            <span data-hide="dark">Light</span>
            <span data-hide="light">Dark</span>
          </Button>
        </Flex>
      </Flex>
    </AppBar>
  )
}

export { _AppBar as AppBar }
