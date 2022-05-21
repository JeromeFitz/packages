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
// import * as Portal from '@radix-ui/react-portal'
import { useKBar } from 'kbar'
import { useTheme } from 'next-themes'
import * as React from 'react'

const _AppBar = ({}) => {
  const kbar = useKBar()
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = React.useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle(darkTheme?.className)
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
        <Flex css={{ ml: '$3' }} direction="row" justify="start">
          {/* <Box css={{ '@initial': { display: 'none' } }}> */}
          <Flex>
            <Button
              css={{
                py: '$2',
                mr: '$2',
                '@hover': {
                  '&:hover, &:hover + &': {
                    cursor: 'pointer',
                  },
                },
              }}
              size="1"
              onClick={kbar.query.toggle}
              ghost
            >
              Menu: KBar
            </Button>
          </Flex>
          {/* </Box> */}
          <Box css={{ '@bp1': { display: 'none' } }}>
            <Sheet>
              <SheetTrigger asChild>
                <Button css={{ '&:hover': { cursor: 'pointer' } }} size="1">
                  Menu: Sheet
                </Button>
              </SheetTrigger>
              {/* <Portal.Root> */}
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
                <Separator decorative margin="my3" size="full" />
                <Text>Hello.</Text>
              </SheetContent>
              {/* </Portal.Root> */}
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
