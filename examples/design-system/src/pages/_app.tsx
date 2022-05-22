import { globalStyles as globalStylesDefault } from '@jeromefitz/design-system/src'
import { Box, Container } from '@jeromefitz/design-system/src/components'
import { globalCss } from '@jeromefitz/design-system/src/lib/stitches.config'
import _merge from 'lodash/merge'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'

import { Header } from '../components/Header'
import { Providers } from '../context/Providers'
import { globalStyles as globalStylesLocal } from '../styles/globalStyles'

const globalStyles = _merge(globalStylesDefault, globalStylesLocal)

function MyApp({ Component, pageProps, router }: AppProps) {
  globalCss(globalStyles)()
  return (
    <Providers>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,viewport-fit=cover"
        />
      </Head>
      <Container as="main" id="main">
        <Header />
        <Box css={{ pt: '$4' }}>
          <Component {...pageProps} key={router.route} />
        </Box>
      </Container>
    </Providers>
  )
}

export default MyApp
