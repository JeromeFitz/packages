import type { AppProps } from 'next/app'

import { globalStyles as globalStylesDefault } from '@jeromefitz/design-system/src'
import { Box, Container } from '@jeromefitz/design-system/src/components'
import { globalCss } from '@jeromefitz/design-system/src/lib/stitches.config'

import _merge from 'lodash/merge.js'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Providers } from '../context/Providers.tsx'
import { globalStyles as globalStylesLocal } from '../styles/globalStyles.ts'

const CommandMenu = dynamic(() => import('../components/CommandMenu/index.ts'), {
  ssr: true,
})
const Header = dynamic(() => import('../components/Header/index.tsx'), {
  ssr: true,
})

const globalStyles = _merge(globalStylesDefault, globalStylesLocal)

function MyApp({ Component, pageProps, router }: AppProps) {
  globalCss(globalStyles)()
  return (
    <Providers>
      <Head>
        <meta
          content="width=device-width, initial-scale=1.0,viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <Container as="main" id="main">
        <Header />
        <Box css={{ pt: '$4' }}>
          <Component {...pageProps} key={router.route} />
        </Box>
      </Container>
      <CommandMenu />
    </Providers>
  )
}

export default MyApp
